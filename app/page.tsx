// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { COURSES, LESSON_SUMMARIES } from './data'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]?.code || '')
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          router.push('/login')
        } else {
          setUser(session.user)
          setLoading(false)
        }
      } catch (err) {
        console.error('Auth error:', err)
        setLoading(false)
      }
    }
    checkUser()
  }, [router])

  // ป้องกัน Server-side rendering crash บน Vercel
  if (!mounted) return null

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-gray-500 font-medium">กำลังโหลดข้อมูลระบบ...</p>
      </div>
    )
  }

  const currentCourseInfo = COURSES.find((c) => c.code === selectedCourse)
  const filteredSummaries = LESSON_SUMMARIES.filter((s) => s.courseCode === selectedCourse)
  const activeLesson = LESSON_SUMMARIES.find((s) => s.id === selectedLesson)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-gray-800">คลังสรุปชีทเรียนวิศวกรรมศาสตร์</h1>
          <p className="text-xs text-gray-500 mt-0.5">ระบบสรุปเนื้อหาสำหรับเตรียมสอบออนไลน์</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg">{user?.email}</span>
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push('/login')
            }}
            className="rounded-lg bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-red-600"
          >
            ออกจากระบบ
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto mt-6 max-w-6xl">
        {/* รายการวิชาเลือก */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => {
            const isSelected = selectedCourse === course.code
            return (
              <button
                key={course.code}
                onClick={() => {
                  setSelectedCourse(course.code)
                  setSelectedLesson(null)
                }}
                className={`rounded-xl border p-5 text-left transition-all ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/20'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <h3 className="text-sm font-bold text-gray-800 leading-snug">
                  {course.nameEn}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{course.nameTh}</p>
              </button>
            )
          })}
        </div>

        {/* ส่วนแสดงเนื้อหา */}
        {!activeLesson ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                รายการบทเรียนสรุปสำหรับอ่านสอบ
              </span>
              <h2 className="mt-1 text-xl font-bold text-gray-800">
                {currentCourseInfo?.nameEn}
              </h2>
              <p className="text-sm text-gray-500">{currentCourseInfo?.nameTh}</p>
            </div>

            {filteredSummaries.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredSummaries.map((summary) => (
                  <div
                    key={summary.id}
                    className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800">
                          บทที่ {summary.chapterNo}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-800">{summary.titleTh}</h3>
                      <p className="text-xs text-gray-400 mb-2">{summary.titleEn}</p>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{summary.description}</p>
                    </div>

                    <div className="mt-5 border-t border-gray-100 pt-3">
                      <button
                        onClick={() => setSelectedLesson(summary.id)}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                      >
                        อ่านเนื้อหาสรุปฉบับเต็ม →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
                <p className="text-gray-500 text-sm">
                  ยังไม่มีเนื้อหาสรุปบทเรียนสำหรับวิชานี้
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedLesson(null)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline mb-4"
            >
              ← กลับไปเลือกบทเรียนอื่น
            </button>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm mb-6">
              <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
                บทที่ {activeLesson.chapterNo}
              </span>
              <h1 className="mt-3 text-2xl font-extrabold text-gray-900 leading-tight">{activeLesson.titleTh}</h1>
              <p className="text-sm text-gray-400 mt-1">{activeLesson.titleEn}</p>
              <p className="mt-4 text-xs leading-relaxed text-gray-600 border-t border-gray-100 pt-3">{activeLesson.description}</p>
            </div>

            <div className="space-y-6">
              {activeLesson.content?.map((sec, idx) => (
                <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">{sec.heading}</h3>

                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-700 leading-relaxed mb-4">
                    {sec.details?.map((detail, dIdx) => (
                      <li key={dIdx} className="pl-1">{detail}</li>
                    ))}
                  </ul>

                  {sec.formula && (
                    <div className="my-3 rounded-lg bg-blue-50 border border-blue-200 p-3.5 text-xs text-blue-900 font-mono overflow-x-auto">
                      <span className="block text-[10px] text-blue-600 font-sans font-semibold mb-1">สูตรคำนวณสำคัญ:</span>
                      {sec.formula}
                    </div>
                  )}

                  {sec.examTips && (
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900">
                      <span className="font-bold text-amber-800">💡 Exam Tip (เก็งข้อสอบ): </span>
                      {sec.examTips}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
