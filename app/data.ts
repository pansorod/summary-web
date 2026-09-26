export interface LessonSummary {
  id: string
  courseCode: string
  titleTh: string
  titleEn: string
  content: {
    heading: string
    details: string[]
  }[]
}

export const COURSES = [
  { code: '618370-165', nameEn: 'INSTRUMENTATION AND ELECTRICAL MEASUREMENT', nameTh: 'เครื่องมือวัดและการวัดทางไฟฟ้า' },
  { code: '618327-165', nameEn: 'PHYSICS OF ELECTRONIC MATERIALS AND DEVICES', nameTh: 'ฟิสิกส์ของวัสดุไฟฟ้าและอุปกรณ์อิเล็กทรอนิกส์' },
  { code: '620101-165', nameEn: 'ENGINEERING MATERIALS', nameTh: 'วัสดุวิศวกรรม' },
  { code: '618352-165', nameEn: 'MICROCONTROLLER AND BASIC INTERNET OF THINGS', nameTh: 'ไมโครคอนโทรลเลอร์และอินเทอร์เน็ตแห่งสรรพสิ่งเบื้องต้น' },
  { code: '618360-1651', nameEn: 'ELECTROMAGNETIC FIELDS AND WAVES', nameTh: 'สนามและคลื่นแม่เหล็กไฟฟ้า' },
  { code: '618313-165', nameEn: 'TECHNICAL COMPUTER APPLICATIONS', nameTh: 'การประยุกต์คอมพิวเตอร์เชิงเทคนิค' },
]

export const LESSON_SUMMARIES: LessonSummary[] = [
  // ==========================================
  // วิชาที่ 1: 618327-165 PHYSICS OF ELECTRONIC MATERIALS AND DEVICES
  // ==========================================
  {
    id: '618327-lec9-deep',
    courseCode: '618327-165',
    titleTh: 'บทเรียนที่ 9: ฟิสิกส์ของ PN Junction และประจุพื้นที่เชิงลึก (PN Junction Electrostatics)',
    titleEn: 'Lecture 9: Deep PN Junction Electrostatics & Space Charge Physics',
    content: [
      {
        heading: '1. โครงสร้างและการจำแนกรอยต่อ (Junction Classification & Impurity Profiles)',
        details: [
          'Abrupt Junction (Step Junction): เกิดจากการโดปสารกึ่งตัวนำชนิด P และ N ให้มีระดับความเข้มข้นสม่ำเสมอ (N_A และ N_D) โดยความเข้มข้นสารโดปเปลี่ยนชนิดแบบกะทันหัน ณ ระนาบรอยต่อ (x=0) โดยสมการ Poisson ในชั้น Depletion คือ d^2V/dx^2 = -rho/epsilon_s มักเกิดจากการทำ Ion Implantation พลังงานต่ำ หรือ Shallow Diffusion',
          'Linearly Graded Junction: ความเข้มข้นสารโดปสุทธิเปลี่ยนแปลงอย่างเป็นเส้นตรงตามระยะทาง N_D - N_A = ax (โดย a คือความชันการโดปมีหน่วยเป็น cm^-4) ส่งผลให้ความหนาแน่นประจุสุทธิ rho(x) = qax มักเกิดจากกระบวนการ Deep Diffusion อุณหภูมิสูงเป็นเวลานาน',
          'One-sided Junction (p+-n หรือ n+-p): เกิดขึ้นเมื่อฝั่งหนึ่งได้รับการโดปเข้มข้นกว่าอีกฝั่งมากหลายเท่าตัว (N_A >> N_D หรือ N_D >> N_A) ส่งผลให้ชั้นปลอดพาหะ (Depletion Region) ขยายตัวเข้าไปในฝั่งที่โดปเบาบางกว่าเกือบทั้งหมด (W approx x_n สำหรับ p+-n) โดยสูตรความกว้างคือ W = sqrt((2*epsilon_s*(V_bi - V)) / (q*N_D))',
        ],
      },
      {
        heading: '2. สภาวะสมดุลความร้อน โครงสร้างแถบพลังงาน และศักย์ภายใน (Thermal Equilibrium & Built-in Potential)',
        details: [
          'กระบวนการเกิดชั้น Depletion: ในสภาวะสมดุล อิเล็กตรอนอิสระจาก N-side และโฮลจาก P-side จะแพร่ (Diffused) ข้ามรอยต่อเข้าหากันและเข้าทำลายล้างกัน (Recombination) ทิ้งไว้เพียงประจุไอออนตรึงที่ย้ายที่ไม่ได้ (Immobile Donor N_D+ และ Acceptor N_A-) เกิดเป็นสนามไฟฟ้าภายใน (E_bi) ทิศทางจาก N ไป P เพื่อต้านการแพร่ต่อ',
          'การคำนวณ Built-in Potential (V_bi): เป็นกำแพงศักย์ที่กั้นไม่ให้พาหะส่วนมากไหลข้ามรอยต่อ คำนวณจากสมการ V_bi = (kT/q) * ln((N_A * N_D) / n_i^2) = V_T * ln((N_A * N_D) / n_i^2) โดยที่ V_T = kT/q approx 25.9 mV ที่อุณหภูมิห้อง (300K) และ n_i คือความเข้มข้นพาหะดั้งเดิมของซิลิคอน (1.5 x 10^10 cm^-3)',
          'Energy Band Bending: ระดับพลังงานเฟอร์มี (E_F) จะต่อกันเป็นเส้นตรงราบเรียบตลอดทั้งชิ้นวัสดุในสภาวะสมดุล ส่งผลให้แถบพลังงานนำกระแส (E_c) และแถบพลังงานเวเลนซ์ (E_v) ของฝั่ง P ยกตัวสูงกว่าฝั่ง N เป็นระยะทางพลังงานเท่ากับ qV_bi',
        ],
      },
      {
        heading: '3. สภาวะไบแอส การกระจายของสนามไฟฟ้า และระยะ Depletion (Biasing & Electric Field)',
        details: [
          'Forward Bias Condition (V_F > 0): ต่อขั้วบวกเข้า P-side และขั้วลบเข้า N-side สนามไฟฟ้าภายนอกจะหักล้างกับสนามไฟฟ้าภายใน ลดกำแพงศักย์ลงเหลือ V_bi - V_F ความกว้าง Depletion แคบลงเป็น W = sqrt(((2*epsilon_s*(V_bi - V_F))/q) * ((N_A + N_D)/(N_A * N_D))) ทำให้พาหะส่วนมากมีพลังงานสูงพอที่จะฉีดข้ามรอยต่อเกิดเป็นกระแสส่งออกชนิด Exponential',
          'Reverse Bias Condition (V_R > 0): ต่อขั้วบวกเข้า N-side และขั้วลบเข้า P-side สนามไฟฟ้าภายนอกเสริมสนามไฟฟ้าภายใน เพิ่มกำแพงศักย์เป็น V_bi + V_R ชั้น Depletion ขยายกว้างขึ้น กระแสจากพาหะส่วนมากหยุดไหลโดยสิ้นเชิง คงเหลือเฉพาะกระแสอิ่มตัวย้อนกลับ (I_s) ขนาดเล็กมากระดับ nano/picoampere จากพาหะส่วนน้อย',
          'สนามไฟฟ้าสูงสุด (E_max): สนามไฟฟ้าจะมีความเข้มสูงสุด ณ ตำแหน่งระนาบรอยต่อพอดี (x=0) โดยคำนวณจาก E_max = -(q * N_D * x_n) / epsilon_s = -(q * N_A * x_p) / epsilon_s = -2(V_bi - V) / W',
        ],
      },
      {
        heading: '4. คาปาซิแตนซ์ที่รอยต่อและการวิเคราะห์กราฟ C-V (Junction Capacitance & C-V Profiling)',
        details: [
          'Depletion / Junction Capacitance (C_j): ประจุไอออนตรึงในชั้น Depletion ทำหน้าที่เสมือนแผ่นตัวนำขนานสองแผ่นที่มีฉนวนคั่น ค่าความจุต่อพื้นที่คำนวณได้จาก C_j = dQ/dV = epsilon_s / W = sqrt((q * epsilon_s * N_A * N_D) / (2*(N_A + N_D)*(V_bi - V))) โดยค่าความจุจะลดลงเมื่อเพิ่มแรงดันไบแอสกลับ (V_R)',
          'C-V Profiling Technique: เทคนิคการวัดความจุไฟฟ้าเพื่อหาโปรไฟล์สารโดป เมื่อนำค่าความจุมาพล็อตสัมพันธ์ในรูป 1/C_j^2 เทียบกับแรงดัน V จะได้กราฟเส้นตรง ซึ่งจุดตัดแกนแรงดัน (X-intercept) จะมีค่าเท่ากับ Built-in Potential (V_bi) พอดี',
          'การหาความเข้มข้นสารโดปจากความชัน: ความชันของกราฟ 1/C_j^2 vs V มีค่าเท่ากับ Slope = 2 / (q * epsilon_s * N_B) ทำให้เราสามารถคำนวณหาความเข้มข้นของสารโดปฝั่งที่โดปเบาบางกว่า (N_B) ได้อย่างแม่นยำ',
        ],
      },
    ],
  },
  {
    id: '618327-lec10-deep',
    courseCode: '618327-165',
    titleTh: 'บทเรียนที่ 10: ทฤษฎีกระแสไอเดียลไดโอด และกลไกเบรกดาวน์เชิงฟิสิกส์ (I-V & Breakdown Mechanics)',
    titleEn: 'Lecture 10: Ideal Diode Physics & Comprehensive Breakdown Mechanics',
    content: [
      {
        heading: '1. สมการไอเดียลไดโอดและการพากระแสของพาหะส่วนน้อย (Ideal Diode Equation & Carrier Transport)',
        details: [
          'Shockley Ideal Diode Equation: ความหนาแน่นกระแสรวมของไดโอดคำนวณจาก J = J_s * (exp((q*V)/(k*T)) - 1) = J_s * (exp(V / V_T) - 1) เมื่อ V คือแรงดันที่ป้อนให้แก่อุปกรณ์',
          'Reverse Saturation Current Density (J_s): กระแสอิ่มตัวย้อนกลับเกิดจากการแพร่ของพาหะส่วนน้อย (Minority Carrier Diffusion) ที่ขอบของชั้น Depletion คำนวณจากสมการ J_s = q * n_i^2 * ((D_p / (L_p * N_D)) + (D_n / (L_n * N_A))) โดย D_p, D_n คือค่าสัมประสิทธิ์การแพร่ และ L_p, L_n คือระยะทางเฉลี่ยการแพร่',
          'อิทธิพลของอุณหภูมิแวดล้อมต่อ J_s: เนื่องจาก J_s แปรผันตรงตาม n_i^2 prop T^3 * exp(-E_g / (k*T)) ทำให้กระแสอิ่มตัวย้อนกลับไวต่ออุณหภูมิสูงมาก โดยมีค่าเพิ่มขึ้นเกือบเท่าตัว (Doubles) ในทุกๆ อุณหภูมิที่เพิ่มขึ้น 10 องศาเซลเซียส',
        ],
      },
      {
        heading: '2. กลไกการพังทลายของรอยต่อแบบเจาะลึก (Junction Breakdown Mechanics)',
        details: [
          'Zener Breakdown (Quantum Mechanical Tunneling): เกิดขึ้นใน PN Junction ที่ได้รับการโดปสารเข้มข้นสูงมากทั้งสองฝั่ง (> 5 x 10^17 cm^-3) ส่งผลให้ชั้น Depletion แคบลงจนน้อยกว่า 10 nm และมีสนามไฟฟ้าสูงเกิน 10^6 V/cm อิเล็กตรอนใน Valence Band ฝั่ง P สามารถทะลุผ่าน (Tunneling) แถบพลังงานข้อห้าม (Bandgap) ไปยัง Conduction Band ฝั่ง N ได้โดยตรง แรงดันเบรกดาวน์มักต่ำกว่า 4V และมีค่าสัมประสิทธิ์อุณหภูมิเป็นลบ',
          'Avalanche Breakdown (Impact Ionization Process): เกิดขึ้นในรอยต่อที่โดปสารต่ำถึงปานกลาง ชั้น Depletion จะกว้าง ไบแอสกลับสูงเร่งพาหะส่วนน้อยให้มีพลังงานจลน์สูงมาก พอที่จะไปชนอะตอมในโครงผลึก เกิดการแตกตัวให้พาหะคู่ใหม่ (Electron-Hole Pair Generation) และพาหะใหม่นี้จะถูกเร่งไปชนอะตอมอื่นต่อเป็นปฏิกิริยาลูกซ้อน มีอัตราการคูณกระแส M = 1 / (1 - (V/V_BR)^n) แรงดันเบรกดาวน์มักสูงกว่า 6V และมีสัมประสิทธิ์อุณหภูมิเป็นบวก',
          'Punch-Through Breakdown: เกิดในอุปกรณ์โครงสร้างชั้นบางหรือโดปเบาบางมาก เช่น p+-n-n+ เมื่อจ่ายแรงดันไบแอสกลับ ชั้น Depletion ฝั่ง Reverse จะขยายกว้างออกไปจนไปชนเชื่อมต่อกับขอบเขตของชั้น n+ อีกฝั่งหนึ่ง ทำให้กำแพงศักย์พังทลายลงและกระแสไหลทะลักอย่างรวดเร็วก่อนที่จะเกิด Avalanche Breakdown',
        ],
      },
    ],
  },
  {
    id: '618327-lec11-deep',
    courseCode: '618327-165',
    titleTh: 'บทเรียนที่ 11: ฟิสิกส์ของรอยต่อโลหะ-สารกึ่งตัวนำ และหน้าสัมผัส (Schottky & Ohmic Contacts)',
    titleEn: 'Lecture 11: Metal-Semiconductor Junction Physics & Ohmic Contacts',
    content: [
      {
        heading: '1. ช็อตทกีไดโอด และกำแพงศักย์ (Schottky Barrier Diode - SBD Physics)',
        details: [
          'Schottky Barrier Height (q*phi_bn): เกิดจากการนำโลหะที่มี Work Function (phi_m) มาสัมผัสกับสารกึ่งตัวนำ N-type ที่มี Electron Affinity (chi_s) โดยมีกำแพงศักย์สำหรับอิเล็กตรอนคือ q*phi_bn = q*(phi_m - chi_s) และมี Built-in Potential V_bi = phi_bn - V_n',
          'กลไก Thermionic Emission Transport: การนำกระแสใน Schottky Diode ไม่ได้เกิดจากการแพร่ของพาหะส่วนน้อยเหมือน PN Junction แต่เกิดจากการที่พาหะส่วนมาก (Majority Carriers / Hot-carriers) มีพลังงานความร้อนสูงพอที่จะข้ามกำแพงศักย์ q*phi_bn ไปได้ สมการกระแสคือ J = A* * T^2 * exp(-(q*phi_bn)/(k*T)) * (exp((q*V)/(k*T)) - 1) โดย A* คือ Richardson Constant',
          'ข้อดีเชิงโครงสร้างวิศวกรรม: เนื่องจากนำกระแสด้วย Majority Carrier จึงไม่มีกระแสค้างของพาหะส่วนน้อย (No Minority Carrier Storage Charge) ส่งผลให้ไม่มี Reverse Recovery Time (t_rr approx 0) สวิตช์เปิด-ปิดได้เร็วมากในระดับ Gigahertz และมีแรงดันเริ่มนำกระแส (Cut-in Voltage) ต่ำเพียง 0.2 - 0.3V',
        ],
      },
      {
        heading: '2. หน้าสัมผัสโอห์มมิก และความต้านทานสัมผัสเฉพาะ (Ohmic Contacts & Contact Resistance)',
        details: [
          'คุณสมบัติหน้าสัมผัสโอห์มมิก: คือจุดต่อระหว่างโลหะกับสารกึ่งตัวนำที่ไม่แสดงพฤติกรรมเป็นไดโอด มีเส้นกราฟกระแส-แรงดัน (I-V) เป็นเส้นตรงตามกฎของโอห์มทั้งไบแอสบวกและลบ มีความต้านทานต่ำมากจนไม่ส่งผลกระทบต่อประสิทธิภาพรวมของอุปกรณ์',
          'กลไก Field Emission (Tunneling) ใน Ohmic Contact: ในทางปฏิบัติ การสร้าง Ohmic Contact จะใช้วิธีโดปสารกึ่งตัวนำบริเวณผิวสัมผัสให้มีความเข้มข้นสูงมากๆ (n+ หรือ p+ > 10^19 cm^-3) ซึ่งจะส่งผลให้ชั้น Depletion บริเวณรอยต่อแคบลงมาก (< 3 nm) จนพาหะสามารถเกิด Quantum Mechanical Tunneling ทะลุผ่านกำแพงศักย์ไปมาได้อย่างง่ายดาย',
          'Specific Contact Resistance (R_c): ดัชนีตัวชี้วัดคุณภาพของหน้าสัมผัสไฟฟ้า คำนวณจาก R_c = (dJ/dV)^-1 ณ แรงดัน V=0 มีหน่วยเป็น ohm.cm^2 สำหรับวงจรรวมขนาดใหญ่ (VLSI/ULSI) ค่า R_c ต้องต่ำกว่า 10^-6 ohm.cm^2',
        ],
      },
    ],
  },

  // ==========================================
  // วิชาที่ 2: 618370-165 INSTRUMENTATION AND ELECTRICAL MEASUREMENT
  // ==========================================
  {
    id: '618370-lec1-deep',
    courseCode: '618370-165',
    titleTh: 'บทที่ 1: ระบบหน่วย มาตรฐานการวัด และการประมวลผลตัวเลขอย่างละเอียด',
    titleEn: 'Chapter 1: Measurement Standards, SI Units & Significant Figures',
    content: [
      {
        heading: '1. นิยามการวัด ห่วงโซ่การสอบกลับได้ และระดับมาตรฐาน (Measurement & Traceability)',
        details: [
          'นิยามการวัด (Measurement): กระบวนการเปรียบเทียบเชิงปริมาณของตัวแปรที่ไม่ทราบค่า (Unknown Quantity) กับค่ามาตรฐานอ้างอิง (Standard Value) ที่เป็นสากล',
          'การสอบกลับได้ทางการวัด (Measurement Traceability): คุณสมบัติของผลการวัดที่สามารถเชื่อมโยงกลับไปหามาตรฐานแห่งชาติหรือมาตรฐานสากลได้ ผ่านห่วงโซ่การสอบเทียบ (Calibration Chain) ที่ไม่ขาดช่วง พร้อมเอกสารประเมินค่าความไม่แน่นอนขยาย (Expanded Uncertainty) กำกับในทุกขั้นตอน',
          'ลำดับขั้นมาตรฐานการวัด (Hierarchy of Standards): 1) International Standards (มาตรฐานสากลเก็บรักษาที่ BIPM ประเทศฝรั่งเศส), 2) Primary Standards (มาตรฐานปฐมภูมิระดับชาติ เช่น NIMT ในไทย), 3) Secondary Standards (มาตรฐานทุติยภูมิสำหรับแล็บสอบเทียบ), 4) Working Standards (เครื่องมือมาตรฐานสำหรับใช้งานจริงในอุตสาหกรรม)',
        ],
      },
      {
        heading: '2. หน่วย SI กฎเลขนัยสำคัญ และเทคนิคการปัดเศษ (SI Units & Bankers Rounding)',
        details: [
          '7 หน่วยฐาน SI (SI Base Units): ประกอบด้วย เมตร (m - ความยาว), กิโลกรัม (kg - มวล), วินาที (s - เวลา), แอมแปร์ (A - กระแสไฟฟ้า), เคลวิน (K - อุณหภูมิ), โมล (mol - ปริมาณสาร), และ แคนเดลา (cd - ความเข้มส่องสว่าง)',
          'กฎการคิดเลขนัยสำคัญ (Significant Figures): การบวกและลบ ผลลัพธ์จะต้องมีจำนวนตำแหน่ง ทศนิยม เท่ากับตัวเลขที่มีตำแหน่งทศนิยมหยาบที่สุด (น้อยที่สุด) ส่วนการคูณและหาร ผลลัพธ์ต้องมีจำนวน เลขนัยสำคัญ เท่ากับตัวเลขที่มีเลขนัยสำคัญน้อยที่สุด',
          'Bankers Rounding (Unbiased Rounding): หลักการปัดเศษทางวิทยาศาสตร์เพื่อลดความลำเอียงสะสม หากตัวเลขหลังตำแหน่งที่ต้องการตัดคือเลข 5 พอดีและไม่มีเศษต่อท้าย ให้พิจารณาตัวเลขข้างหน้าเลข 5 หากเป็น เลขคี่ ให้ปัดขึ้น แต่ถ้าเป็น เลขคู่หรือเลขศูนย์ ให้ตัดทิ้งทันที',
        ],
      },
    ],
  },
  {
    id: '618370-lec2-deep',
    courseCode: '618370-165',
    titleTh: 'บทที่ 2: การวิเคราะห์สถิติข้อมูลการวัด และการถดถอยเชิงเส้น (Statistical Evaluation & Regression)',
    titleEn: 'Chapter 2: Statistical Evaluation & Linear Regression Analysis',
    content: [
      {
        heading: '1. ตัวแปรประเมินทางสถิติและความคลาดเคลื่อน (Statistical Metrics & Error Types)',
        details: [
          'ค่าเฉลี่ยเลขคณิต (Arithmetic Mean): ตัวแทนค่าที่ดีที่สุดของการวัดซ้ำ คำนวณจาก mean_x = (sum x_i) / n',
          'ส่วนเบี่ยงเบนมาตรฐานกลุ่มตัวอย่าง (Sample Standard Deviation): สำหรับจำนวนการทดลองสุ่มขนาดเล็ก (n < 30) ใช้สูตรดีกรีความอิสระ n-1 คือ s = sqrt((sum (x_i - mean_x)^2) / (n - 1))',
          'ค่าความคลาดเคลื่อนสัมบูรณ์และสัมพัทธ์: Absolute Error E_a = |X_measured - X_true| และ Relative Error E_r = (E_a / X_true) * 100%',
          'Probable Error (PE): ค่าความผิดพลาดน่าจะเป็น มีค่าเท่ากับ PE = +-0.6745 * s',
        ],
      },
      {
        heading: '2. การวิเคราะห์การถดถอยเชิงเส้นด้วยวิธีกำลังสองน้อยที่สุด (Linear Regression & Correlation)',
        details: [
          'Least-Squares Regression Method: วิธีหาเส้นตรงฟิตติ้ง Y = beta_0 + beta_1 * X ที่ทำให้ผลรวมความคลาดเคลื่อนยกกำลังสอง sum e_i^2 มีค่าน้อยที่สุด โดยความชันคำนวณจาก beta_1 = (n*sum(XY) - sum(X)*sum(Y)) / (n*sum(X^2) - (sum(X))^2) และจุดตัดแกน Y คือ beta_0 = mean_Y - beta_1 * mean_X',
          'ค่าสัมประสิทธิ์สหสัมพันธ์ (Correlation Coefficient - r): ตัวบ่งชี้ระดับความสัมพันธ์เชิงเส้นระหว่างตัวแปรสองชุด r = (n*sum(XY) - sum(X)*sum(Y)) / sqrt((n*sum(X^2) - (sum(X))^2) * (n*sum(Y^2) - (sum(Y))^2))',
          'การแปลความหมายค่า r: หาก r = +1.0 หมายถึงแปรผันตามกันเชิงเส้นอย่างสมบูรณ์, r = -1.0 หมายถึงแปรผกผันเชิงเส้นอย่างสมบูรณ์, และ r = 0 หมายถึงไม่มีความสัมพันธ์เชิงเส้นต่อกัน',
        ],
      },
    ],
  },
  {
    id: '618370-lec3-deep',
    courseCode: '618370-165',
    titleTh: 'บทที่ 3: การวิเคราะห์ความผิดพลาดในการวัด และผลกระทบภาระ (Errors & Loading Effects)',
    titleEn: 'Chapter 3: Measurement Errors & Circuit Loading Effects',
    content: [
      {
        heading: '1. การจำแนกประเภทความผิดพลาด (Classification of Measurement Errors)',
        details: [
          'Gross Errors / Human Errors: ความผิดพลาดอันเกิดจากตัวบุคคล เช่น การอ่านสเกลเบี่ยงทิศ การต่อวงจรผิดพลาด การบันทึกข้อมูลสลับตำแหน่ง แก้ไขได้โดยเพิ่มความระมัดระวังและใช้การตรวจสอบไขว้ (Cross-check)',
          'Systematic Errors: ความผิดพลาดอย่างมีระบบที่มีรูปแบบแน่นอน ตรวจสอบและแก้ไขได้ด้วยการสอบเทียบ (Calibration) แบ่งออกเป็น:',
          '-- Instrument Errors: เกิดจากความบกพร่องของโครงสร้างเครื่องมือวัด เช่น สปริงลอยตัว ชิ้นส่วนฝืด ความต้านทานเสื่อมสภาพ',
          '-- Environmental Errors: เกิดจากสภาวะแวดล้อมภายนอกที่ส่งผลกระทบต่อเครื่องมือ เช่น อุณหภูมิเปลี่ยน ความชื้น สนามแม่เหล็กรบกวน',
          '-- Parallax Error: ความผิดพลาดจากการวางตำแหน่งสายตาไม่ตรงตั้งฉากกับสเกลเข็มวัด แก้โดยใช้ขอบกระจกเงาสะท้อนหลังหน้าปัด',
          'Random Errors: ความผิดพลาดแบบสุ่มที่เกิดจากปัจจัยเล็กน้อยหลายประการที่ไม่ทราบสาเหตุและควบคุมไม่ได้ การลดผลกระทบทำได้โดยการเพิ่มจำนวนครั้งในการวัดแล้วคำนวณค่าเฉลี่ย',
        ],
      },
      {
        heading: '2. ผลกระทบภาระของเครื่องมือวัดไฟฟ้า (Loading Effects)',
        details: [
          'Ammeter Loading Effect: เมื่อต่อแอมมิเตอร์อนุกรมเข้าไปในวงจร ความต้านทานภายในของแอมมิเตอร์ (R_A) จะไปเพิ่มความต้านทานรวมของวงจร ทำให้กระแสที่ไหลจริงในวงจรรอบนั้นลดลง แอมมิเตอร์อุดมคติจึงต้องมี R_A = 0',
          'Voltmeter Loading Effect: เมื่อต่อโวลต์มิเตอร์ขนานกับโหลดในวงจร ความต้านทานภายในของโวลต์มิเตอร์ (R_V) จะดึงกระแสบางส่วนดรอปออกจากโหลด ทำให้แรงดันไฟฟ้าตกคร่อมโหลดมีค่าลดลงจากความเป็นจริง โวลต์มิเตอร์อุดมคติจึงต้องมี R_V = infinity',
          'การคำนวณ % Error จากสเกลเต็ม (% f.s.d.): % Error = (Absolute Error / Full Scale Value) * 100% การอ่านค่าให้มีความแม่นยำสูงที่สุดควรอ่านช่วงตั้งแต่ 2/3 ของสเกลขึ้นไป',
        ],
      },
    ],
  },
  {
    id: '618370-lec4-deep',
    courseCode: '618370-165',
    titleTh: 'บทที่ 4: มิเตอร์ PMMC และเทคนิคการออกแบบ DC Ammeter / Voltmeter',
    titleEn: 'Chapter 4: PMMC Movements & DC Meter Circuit Design',
    content: [
      {
        heading: '1. โครงสร้างและหลักการทำงานของ PMMC (Permanent Magnet Moving Coil)',
        details: [
          'หลักการทำงานพื้นฐาน: ทำงานตามแรงลอเรนตซ์ เมื่อกระแสตรง (DC) ไหลผ่านขดลวดทองแดงที่วางอยู่ระหว่างขั้วแม่เหล็กถาวร จะเกิดแรงทางแม่เหล็กผลักให้ขดลวดและเข็มชี้หมุนไป',
          '3 แรงสมดุลใน PMMC: 1) Deflection Torque (T_d = N * B * I * A) เกิดจากกระแสวัด, 2) Controlling Torque (T_c = K * theta) เกิดจากสปริงก้นหอยต้านการหมุน, 3) Damping Torque เกิดจากกระแสไหลวน (Eddy Current) ในกรอบอลูมิเนียม เพื่อหน่วงไม่ให้เข็มแกว่งสั่น',
        ],
      },
      {
        heading: '2. สูตรการคำนวณออกแบบขยายย่านวัด (DC Meter Design Formulas)',
        details: [
          'DC Ammeter Shunt Resistor: การขยายย่านวัดกระแส ต้องต่อความต้านทาน Shunt (R_sh) ขนานกับขดลวด PMMC คำนวณจาก R_sh = (I_m * R_m) / (I - I_m) = R_m / (n - 1) โดย n = I / I_m คือ Multiplying Factor',
          'Ayrton Shunt (Universal Shunt): วงจรต่อตัวต้านทานชันต์แบบหลายช่วงที่ช่วยป้องกันไม่ให้ขดลวด PMMC ขาดเสียหายขณะทำการหมุนสลับสวิตช์เลือกย่านวัดกระแส',
          'DC Voltmeter Multiplier Resistor: การขยายย่านวัดแรงดัน ต้องต่อความต้านทาน Multiplier (R_s) อนุกรมกับขดลวด PMMC คำนวณจาก R_s = (V / I_FSD) - R_m = (n - 1) * R_m',
          'Voltmeter Sensitivity (S): ความไวของโวลต์มิเตอร์ S = 1 / I_FSD มีหน่วยเป็น ohm/V โดยเครื่องมือที่มีค่า S สูงจะดึงกระแสจากวงจรน้อยและเกิด Loading Effect ต่ำกว่า',
        ],
      },
    ],
  },

  // ==========================================
  // วิชาที่ 3: 618313-165 TECHNICAL COMPUTER APPLICATIONS
  // ==========================================
  {
    id: '618313-week6-deep',
    courseCode: '618313-165',
    titleTh: 'สัปดาห์ที่ 6: สถาปัตยกรรมมัลติเธรดและการประมวลผลขนาน (Multithreading System Architecture)',
    titleEn: 'Week 6: Multithreading System Architecture & Concurrency Control',
    content: [
      {
        heading: '1. ความแตกต่างเชิงสถาปัตยกรรมระหว่าง Process กับ Thread',
        details: [
          'Process (หน่วยประมวลผลหนัก - Heavy-weight): มีพื้นที่หน่วยความจำ (Address Space), Data section, Code section และ OS Resources แยกเดี่ยวกันชัดเจน การสร้างและสลับบริบท (Context Switch) มี Overhead และการใช้ทรัพยากรสูง',
          'Thread (หน่วยประมวลผลย่อย - Light-weight): เป็นหน่วยการทำงานย่อยภายใน Process ทำงานโดยแชร์ Code, Data และทรัพยากรของระบบร่วมกับเธรดอื่นในโปรเซสเดียวกัน แต่จะมี Register set, Program Counter (PC) และ Stack เป็นของตนเอง',
          '4 ข้อดีหลักของ Multithreading Architecture: 1) Responsiveness (โปรแกรมยังคงตอบสนองได้แม้มีเธรดบางตัวทำงานหนักหรือถูกบล็อก), 2) Resource Sharing (แชร์หน่วยความจำร่วมกันได้โดยไม่ต้องใช้ IPC), 3) Economy (ประหยัดพลังงานประมวลผลในการสร้างและสลับบริบท), 4) Scalability (ดึงประสิทธิภาพของซีพียูแบบ Multi-core มาใช้ประมวลผลพร้อมกันได้อย่างเต็มที่)',
        ],
      },
      {
        heading: '2. รูปแบบประมวลผลขนานและโมเดลการแมปเธรด (Parallelism & Thread Models)',
        details: [
          'Data Parallelism vs Task Parallelism: Data Parallelism กระจายข้อมูลชุดเดียวกันไปประมวลผลขนานกันในหลายๆ คอร์ด้วยคำสั่งเดียวกัน ส่วน Task Parallelism กระจายภาระงานที่มีฟังก์ชันต่างกันไปทำงานบนคอร์ต่างๆ ขนานกัน',
          'Many-to-One Model: แมป User threads หลายตัวเข้ากับ Kernel thread ตัวเดียว ทำงานรวดเร็วแต่หากมีเธรดหนึ่งเรียกใช้ Blocking System Call ทั้งโปรเซสจะถูกบล็อกทั้งหมด',
          'One-to-One Model: แมป 1 User thread ตรงกับ 1 Kernel thread รันขนานบน Multicore ได้แท้จริง ไม่บล็อกกัน แต่มี Overhead ในการสร้าง Kernel thread สูง',
          'Many-to-Many Model: แมป User threads หลายตัวเข้ากับ Kernel threads หลายตัวตามความเหมาะสม ยืดหยุ่นสูงสุดและมีประสิทธิภาพสูงสุด',
        ],
      },
      {
        heading: '3. เทคนิคการสร้างเธรดแบบปริยาย (Implicit Threading Tools)',
        details: [
          'Thread Pools: เทคนิคสร้างเธรดเตรียมไว้ในพูลล่วงหน้า เมื่อมีงานเข้ามาจะดึงเธรดจากพูลไปทำ ช่วยลด Overhead การสร้าง/ทำลายเธรดใหม่ และช่วยจำกัดจำนวนเธรดไม่ให้เกินขีดความสามารถของระบบ',
          'OpenMP: ชุดไดเรกทีฟของคอมไพเลอร์ (เช่น #pragma omp parallel) ในภาษา C/C++ ช่วยให้โปรแกรมเมอร์สั่งเปิดการประมวลผลแบบขนานสำหรับ Loop ได้โดยไม่ต้องเขียนจัดการเธรดเอง',
        ],
      },
    ],
  },
  {
    id: '618313-week9-10-deep',
    courseCode: '618313-165',
    titleTh: 'สัปดาห์ที่ 9-10: การประสานเวลาโปรเซส และการแก้ปัญหาพื้นที่วิกฤต (Synchronization & Race Condition)',
    titleEn: 'Week 9-10: Process Synchronization & Critical Section Mechanics',
    content: [
      {
        heading: '1. ภาวะแข่งขัน และข้อกำหนดการแก้ปัญหา Critical Section (Race Condition & Critical Section)',
        details: [
          'Race Condition (สภาวะแข่งขัน): สภาวะที่หลายโปรเซสหรือเธรดเข้าถึงและพยายามแก้ไขข้อมูลที่ใช้ร่วมกัน (Shared Data) พร้อมๆ กัน โดยผลลัพธ์สุดท้ายของการประมวลผลขึ้นอยู่กับลำดับการจังหวะรันที่ไม่แน่นอน ทำให้เกิดข้อมูลขัดแย้ง',
          'เงื่อนไขจำเป็น 3 ประการในการแก้ปัญหา Critical Section (ต้องผ่านครบทั้ง 3 ข้อ):',
          '1) Mutual Exclusion: หากมีโปรเซสใดโปรเซสหนึ่งกำลังทำงานอยู่ในพื้นที่วิกฤต (Critical Section) ของตนเองแล้ว ห้ามโปรเซสอื่นเข้าสู่พื้นที่วิกฤตนั้นเด็ดขาด',
          '2) Progress: หากไม่มีโปรเซสใดทำงานอยู่ในพื้นที่วิกฤต และมีโปรเซสต้องการเข้าทำงาน การตัดสินใจเลือกโปรเซสถัดไปต้องเกิดขึ้นทันที และเลือกได้เฉพาะโปรเซสที่ไม่ได้อยู่ในส่วน Remain Section เท่านั้น',
          '3) Bounded Waiting: ต้องมีการกำหนดขอบเขตจำกัดจำนวนครั้งหรือระยะเวลาที่โปรเซสอื่นจะเข้าพื้นที่วิกฤตหลังจากที่มีโปรเซสร้องขอ เพื่อป้องกันไม่ให้เกิดภาวะการอดตาย (Starvation)',
        ],
      },
      {
        heading: '2. เครื่องมือการซิงโครไนซ์ระดับฮาร์ดแวร์และซอฟต์แวร์ (Synchronization Tools)',
        details: [
          'Atomic Hardware Instructions: คำสั่งฮาร์ดแวร์ระดับซีพียูที่ทำงานเสร็จสิ้นในจังหวะเดียวโดยไม่ถูกขัดจังหวะ (Atomic) เช่น Test-and-Set และ Compare-and-Swap (CAS) ใช้สำหรับการสร้างสปินล็อค (Spinlock)',
          'Mutex Lock: ตัวล็อกระดับซอฟต์แวร์พื้นฐานที่ใช้สลักแม่กุญแจ ทำงานผ่านฟังก์ชัน acquire() เพื่อขอสิทธิ์ล็อกก่อนเข้า Critical Section และ release() เพื่อปลดล็อกเมื่อทำงานเสร็จ',
          'Counting vs Binary Semaphore: ตัวแปรจำนวนเต็ม S ควบคุมผ่านคำสั่ง wait() (หรือ P) และ signal() (หรือ V) โดย Binary Semaphore มีค่า 0 หรือ 1 ทำหน้าที่เหมือน Mutex ส่วน Counting Semaphore ใช้ควบคุมการเข้าถึงทรัพยากรที่มีอยู่หลายชิ้น',
          'Monitors Architecture: โครงสร้างซอฟต์แวร์ระดับสูง (High-level ADT) ที่การันตีคุณสมบัติ Mutual Exclusion ให้อัตโนมัติภายในคลาส ช่วยป้องกันความผิดพลาดอันเกิดจากการเขียนโค้ดปลดล็อก Semaphore ผิดตำแหน่งของโปรแกรมเมอร์',
        ],
      },
    ],
  },
]