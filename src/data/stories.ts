import type { ImpactFilter } from '@/data/prize-categories';

export interface WinnerStory {
  name: string;
  location: string;
  /** Display label on story card */
  category: string;
  /** Matches prize category impactFilter from prize-categories.ts */
  filterCategory: Exclude<ImpactFilter, 'All'>;
  amount: string;
  paragraphs: string[];
}

export const winnerStories: WinnerStory[] = [
  // ── SuperPrize ──────────────────────────────────────────────
  {
    name: 'Robert & Angela Brooks',
    location: 'Ontario, Canada',
    category: 'SuperPrize Winner',
    filterCategory: 'SuperPrize',
    amount: '$1,000,000',
    paragraphs: [
      'Angela had applied to PCH for years, submitting her application whenever a new drawing opened. Like many families in Ontario, they never expected an email from PCH to change everything overnight.',
      'When the email arrived, Angela could hardly believe it. The Prize Patrol confirmed she had been selected in a random drawing open to applicants across North America.',
      'The Brooks family received $1,000,000 — a lump-sum SuperPrize that cleared years of medical debt and allowed Angela to focus fully on her recovery.',
      'Today, the family remains in the community they love. Angela\'s condition has stabilized, and Robert no longer carries the weight of impossible financial choices.',
      '"I applied on my own, every year, never thinking it would be me," Angela shares. "PCH changed our entire future. We are deeply grateful."',
    ],
  },
  {
    name: 'Malik Thompson',
    location: 'Manchester, UK',
    category: 'SuperPrize Winner',
    filterCategory: 'SuperPrize',
    amount: '£400,000',
    paragraphs: [
      'Malik, a software engineer in Manchester, applied to PCH prize drawings while bootstrapping his startup from a spare bedroom.',
      'He had told his small team to apply on their own too — not because he expected anyone to win, but because he believed everyone deserved a shot.',
      'When Malik\'s winner email arrived on a Tuesday morning, he was debugging code. The SuperPrize allowed him to scale infrastructure and expand his team across the UK and Ireland.',
      'Within 18 months, participating companies reduced operational costs by up to 18%. The startup now employs 22 people.',
      '"Every person on my team applies too," Malik says. "I am proof it is real."',
    ],
  },
  {
    name: 'Elena Vasquez',
    location: 'Phoenix, Arizona, USA',
    category: 'SuperPrize Winner',
    filterCategory: 'SuperPrize',
    amount: '$1,000,000',
    paragraphs: [
      'Elena raised three children alone after her husband passed away. She worked two jobs — mornings at a clinic, evenings cleaning offices — and applied to PCH whenever she had a quiet moment.',
      'She almost deleted the winner email, assuming it was spam. A follow-up message from an official applypch.com address confirmed she had won the SuperPrize.',
      'The lump-sum award paid off her mortgage, funded her youngest daughter\'s college tuition, and allowed Elena to cut back to one job for the first time in a decade.',
      'She still volunteers at the clinic on weekends. The difference is that now she chooses to be there, not because she has no other option.',
      '"I applied for myself, not for my kids — they have to apply on their own," Elena laughs. "But this prize gave our whole family room to breathe."',
    ],
  },
  {
    name: 'Thomas & Marie Dupont',
    location: 'Lyon, France',
    category: 'SuperPrize Winner',
    filterCategory: 'SuperPrize',
    amount: '€750,000',
    paragraphs: [
      'Thomas and Marie ran a small bakery in Lyon for twenty-two years. When rising costs threatened to close their doors, Marie applied to PCH while Thomas handled the morning shift.',
      'Months later, Marie received a winner email on her phone between customer orders. The SuperPrize equivalent in euros was enough to renovate the bakery, hire two staff, and expand delivery.',
      'The Duponts kept the business in the family. Their son now manages online orders while Thomas finally takes one day off each week.',
      '"We built this bakery from nothing," Marie says. "One application gave us the chance to keep it alive for the next generation."',
    ],
  },

  // ── Weekly For Life ─────────────────────────────────────────
  {
    name: 'James T.',
    location: 'Texas, USA',
    category: 'Weekly For Life Winner',
    filterCategory: 'Weekly For Life',
    amount: '$5,000/week',
    paragraphs: [
      'James grew up watching his mother work double shifts. He applied to PCH while enrolled in an electrical technician program, filling out the form on his lunch break.',
      'He was selected for $5,000 A Week For Life — guaranteed weekly payments that covered tuition, tools, and living expenses while he completed his training.',
      'James graduated at the top of his class. He now works on large-scale infrastructure projects and mentors young men entering skilled trades in Houston.',
      'His mother retired the year he finished school. James says that was the real prize — not the money itself, but what it made possible.',
      '"I filled out the application on my phone during a lunch break," James says. "It changed the trajectory of my entire family."',
    ],
  },
  {
    name: 'Patricia Hawkins',
    location: 'Ohio, USA',
    category: 'Weekly For Life Winner',
    filterCategory: 'Weekly For Life',
    amount: '$5,000/week',
    paragraphs: [
      'Patricia spent thirty-one years as a school cafeteria manager. She applied to PCH every few months, the same way she told her grandchildren to try things without expecting instant results.',
      'When she won $5,000 A Week For Life at sixty-four, Patricia was planning to work until she physically could not. The weekly payments changed that calculation entirely.',
      'She retired with dignity, paid off her car, and opened a college savings account for each of her four grandchildren. She still substitutes at the school when they are short-staffed — but only when she wants to.',
      '"I did not win a lottery ticket," Patricia says. "I applied to PCH, like anyone else. Now I get to enjoy the years I earned."',
    ],
  },
  {
    name: 'Carlos Mendez',
    location: 'San Diego, California, USA',
    category: 'Weekly For Life Winner',
    filterCategory: 'Weekly For Life',
    amount: '$2,500/week',
    paragraphs: [
      'Carlos was a veteran who had struggled to find steady work after service. He applied to PCH while attending job training workshops at the VA.',
      'Selected for $2,500 A Week For Life, Carlos used the consistent income to complete a commercial driving certification without worrying about rent.',
      'He now drives routes that keep him home most nights. His wife says the stress lines in his face finally softened after years of uncertainty.',
      '"The weekly payments were not a windfall — they were stability," Carlos explains. "That is what I needed most."',
    ],
  },

  // ── Dream Home ──────────────────────────────────────────────
  {
    name: 'The Martinez Family',
    location: 'California, USA',
    category: 'Dream Home Winner',
    filterCategory: 'Dream Home',
    amount: '$420,000',
    paragraphs: [
      'When the Eaton Fire destroyed the Martinez family home in Altadena, insurance covered only part of rebuilding. Mrs. Martinez applied to PCH while the family lived in a rental.',
      'Selected in a Dream Home prize drawing, the family received $420,000 — enough to rebuild on their original lot instead of leaving the community they loved.',
      'Construction took fourteen months. Neighbors brought meals. The children returned to the same school district they had always known.',
      '"We rebuilt belonging," Mrs. Martinez says. "I applied on my own from my phone. I never thought it would be us."',
    ],
  },
  {
    name: 'David L.',
    location: 'Illinois, USA',
    category: 'Dream Home Winner',
    filterCategory: 'Dream Home',
    amount: '$95,000',
    paragraphs: [
      'After losing his job of seventeen years, David fell behind on mortgage payments. He applied to PCH, afraid he would lose the only home his daughters had known.',
      'His Dream Home prize covered arrears and prevented foreclosure, giving him time to complete a certification program and find stable work.',
      'Eighteen months later, David is employed full-time and current on every payment. His daughters still have the bedroom they grew up in.',
      '"This restored my confidence as a father," David shares. "It gave us time to reset instead of collapse."',
    ],
  },
  {
    name: 'Michael Torres',
    location: 'New South Wales, Australia',
    category: 'Dream Home Winner',
    filterCategory: 'Dream Home',
    amount: 'A$500,000',
    paragraphs: [
      'Michael, a teacher in regional New South Wales, applied to PCH every month for three years from his rural home.',
      'When he received the winner email, Michael was grading papers at his kitchen table. The Dream Home prize gave him the choice of a new home or the cash equivalent.',
      'He chose cash to renovate and expand the family property his grandparents had built, and funded a community learning space for local students.',
      'The learning space now hosts after-school tutoring three nights a week. Michael says winning let him invest in his community, not just himself.',
      '"I just applied online," Michael says. "One application changed my family and my community."',
    ],
  },
  {
    name: 'Helen & Richard Okonkwo',
    location: 'Birmingham, UK',
    category: 'Dream Home Winner',
    filterCategory: 'Dream Home',
    amount: '£350,000',
    paragraphs: [
      'Helen and Richard rented a flat in Birmingham for twelve years while saving for a deposit. Rising prices kept moving the goal further away. Helen applied to PCH on Richard\'s encouragement.',
      'Helen\'s winner email arrived during a night shift at the hospital where she works as a nurse. The Dream Home prize gave them the option of a property or cash — they chose cash toward a home purchase.',
      'Within a year, the Okonkwos moved into a three-bedroom house with a garden. Their twins finally have rooms of their own.',
      '"Richard applies too," Helen smiles. "We both have our own applications in. This time it was mine."',
    ],
  },

  // ── Cash Prize ──────────────────────────────────────────────
  {
    name: 'Sarah Jenkins',
    location: 'Florida, USA',
    category: 'Cash Prize Winner',
    filterCategory: 'Cash Prize',
    amount: '$150,000',
    paragraphs: [
      'Sarah ran a neighborhood youth program from a borrowed church hall. She applied to PCH, the same way she told every parent to apply for themselves.',
      'Her $150,000 cash prize allowed her to secure a permanent facility, hire tutors, and expand meal services. The program now serves forty children consistently.',
      'Local businesses donated equipment after hearing her story. Sarah says the prize did not just fund the program — it validated years of unpaid work.',
      '"I applied to PCH from my community," Sarah says. "That application changed a whole neighborhood."',
    ],
  },
  {
    name: 'Aisha Rahman',
    location: 'London, UK',
    category: 'Cash Prize Winner',
    filterCategory: 'Cash Prize',
    amount: '£250,000',
    paragraphs: [
      'Aisha grew up in London dreaming of becoming a biomedical engineer. She applied to PCH prize drawings while working part-time and studying — never assuming she would win.',
      'When selected, the cash prize allowed her to complete her engineering program without deferring enrollment. Tuition gaps, housing, and lab costs were covered by her winnings.',
      'Today, Aisha works on affordable medical device prototypes designed for underserved communities worldwide.',
      '"I applied online and it took five minutes," Aisha says. "That one application funded the career I had worked toward for a decade."',
    ],
  },
  {
    name: 'Angela Brooks',
    location: 'Toronto, Canada',
    category: 'Cash Prize Winner',
    filterCategory: 'Cash Prize',
    amount: 'C$125,000',
    paragraphs: [
      'Angela applied to PCH from Toronto while balancing medical appointments and family responsibilities. She had seen her sister-in-law win a SuperPrize years earlier and never believed it could happen twice in one family.',
      'Her cash prize covered specialized treatment not fully covered by insurance and gave her family room to breathe financially during a difficult year.',
      'Angela returned to part-time work on her own schedule. She still applies to new drawings — "You never know," she says.',
      '"I am Canadian. I applied online like everyone else. PCH does not care where you start — only that you apply for yourself," Angela says.',
    ],
  },
  {
    name: 'Naomi Chen',
    location: 'Bavaria, Germany',
    category: 'Cash Prize Winner',
    filterCategory: 'Cash Prize',
    amount: '€300,000',
    paragraphs: [
      'Naomi, a mechanical engineer in Bavaria, had spent years developing affordable prosthetic limb prototypes. She applied to PCH alongside her research work, without high expectations.',
      'Her cash prize winnings funded lab testing, regulatory compliance, and the first small-scale production run of her designs.',
      'Today, her devices cost a fraction of traditional prosthetics. Early recipients across Europe report restored mobility and improved quality of life.',
      '"I submitted my application from my apartment in Munich," Naomi says. "Months later, I had the capital to turn prototypes into products that help real people walk again."',
    ],
  },
  {
    name: 'Robert M.',
    location: 'Tampa, Florida, USA',
    category: 'Cash Prize Winner',
    filterCategory: 'Cash Prize',
    amount: '$25,000',
    paragraphs: [
      'Robert was a line cook who applied to PCH during breaks, usually on his phone in the parking lot before shifts.',
      'His $25,000 cash prize was not life-changing on paper — but it cleared credit card debt accumulated during a slow season and let him enroll in a culinary management course.',
      'Robert was promoted to kitchen supervisor six months later. He still applies whenever new drawings open.',
      '"Twenty-five thousand dollars is real money when you are counting every week," Robert says. "I applied for myself. That was enough."',
    ],
  },

  // ── Daily Drawing ───────────────────────────────────────────
  {
    name: 'Dorothy H.',
    location: 'Cleveland, Ohio, USA',
    category: 'Daily Drawing Winner',
    filterCategory: 'Daily Drawing',
    amount: '$10,000',
    paragraphs: [
      'Dorothy, seventy-eight, had applied to PCH for over a decade from the same desktop computer in her living room.',
      'She won a $10,000 daily drawing on an ordinary Wednesday. The email arrived while she was watering plants on her porch.',
      'Dorothy used the prize to repair her roof, pay property taxes, and treat her grandchildren to a trip they had only seen in brochures.',
      '"At my age, you stop expecting surprises," Dorothy says. "I kept applying anyway. I am glad I did."',
    ],
  },
  {
    name: 'Kevin Park',
    location: 'Seoul, South Korea (USA citizen)',
    category: 'Daily Drawing Winner',
    filterCategory: 'Daily Drawing',
    amount: '$10,000',
    paragraphs: [
      'Kevin, an American teaching English abroad, applied to PCH during a visit home for the holidays. He almost forgot he had submitted until the winner email appeared months later in his inbox in Seoul.',
      'The $10,000 daily drawing prize covered emergency travel when his father fell ill, allowing Kevin to fly home without dipping into savings.',
      'He spent three weeks with his family before returning to Seoul. Kevin says the prize bought time, which was worth more than the number on the check.',
      '"I applied from my parents\' kitchen in Ohio," Kevin says. "You do not have to be sitting at home to apply — you just have to apply for yourself."',
    ],
  },
  {
    name: 'Maria G.',
    location: 'San Antonio, Texas, USA',
    category: 'Daily Drawing Winner',
    filterCategory: 'Daily Drawing',
    amount: '$10,000',
    paragraphs: [
      'Maria worked as a home health aide, driving between clients across San Antonio. She applied to PCH during lunch breaks in her car.',
      'Selected in a daily cash drawing, Maria received $10,000 — enough to replace her unreliable vehicle and stop worrying about breakdowns between patient visits.',
      'With reliable transportation, she took on two additional clients and increased her income without changing careers.',
      '"I needed a car that would start every morning," Maria says. "Ten thousand dollars from one application solved a problem I had for three years."',
    ],
  },
  {
    name: 'Yuki Tanaka',
    location: 'Vancouver, BC, Canada',
    category: 'Daily Drawing Winner',
    filterCategory: 'Daily Drawing',
    amount: 'C$10,000',
    paragraphs: [
      'Yuki was a graduate student in Vancouver, supporting herself through tutoring and part-time retail. She applied to PCH between study sessions.',
      'Her daily drawing win came during exam season. The C$10,000 prize paid her remaining semester fees and removed the need for a second retail shift.',
      'Yuki graduated on time and now works as a data analyst. She credits the prize with letting her focus on finals instead of finances.',
      '"I applied online from my apartment," Yuki says. "It was one of many things I did that month. It turned out to be the important one."',
    ],
  },

  // ── Vehicle Prize ───────────────────────────────────────────
  {
    name: 'Daniel Reeves',
    location: 'Denver, Colorado, USA',
    category: 'Vehicle Prize Winner',
    filterCategory: 'Vehicle Prize',
    amount: '$50,000',
    paragraphs: [
      'Daniel drove a delivery van with over two hundred thousand miles on it. He applied to PCH while waiting for orders in parking lots across Denver.',
      'When he won the $50,000 Vehicle Prize, Daniel chose the cash option to buy a reliable used truck for his side landscaping business.',
      'The new truck let him take larger jobs. Within a year, landscaping income matched his delivery wages and he cut back to part-time shifts.',
      '"I did not need a luxury car," Daniel laughs. "I needed something that would not break down on I-70. The vehicle prize gave me that choice."',
    ],
  },
  {
    name: 'Sophie Laurent',
    location: 'Montreal, Quebec, Canada',
    category: 'Vehicle Prize Winner',
    filterCategory: 'Vehicle Prize',
    amount: 'C$50,000',
    paragraphs: [
      'Sophie was a single mother of two who commuted ninety minutes each way by bus to reach her nursing shifts. She applied to PCH after a colleague mentioned the apply page.',
      'Her vehicle prize win let her purchase a safe, fuel-efficient car. The commute dropped to thirty-five minutes each way — giving her an extra hour with her children every day.',
      'Sophie says the prize did not change her career or her income, but it changed her mornings and evenings, which mattered more.',
      '"I applied for myself, not for my kids," Sophie says. "They will apply on their own when they are old enough. This prize gave me my time back."',
    ],
  },
  {
    name: 'Marcus Johnson',
    location: 'Atlanta, Georgia, USA',
    category: 'Vehicle Prize Winner',
    filterCategory: 'Vehicle Prize',
    amount: '$50,000',
    paragraphs: [
      'Marcus restored classic cars as a hobby while working in IT. He applied to PCH during a slow week at work, mostly out of curiosity.',
      'Winning the Vehicle Prize, Marcus took the cash equivalent and combined it with savings to open a small auto restoration shop in his garage.',
      'The shop now employs one part-time helper and has a six-month waitlist. Marcus still works in IT — but the shop is no longer just a dream.',
      '"I thought the vehicle prize meant someone would hand me keys," Marcus says. "It meant I got to choose what mobility looked like for my life."',
    ],
  },
  {
    name: 'Ingrid Sørensen',
    location: 'Copenhagen, Denmark',
    category: 'Vehicle Prize Winner',
    filterCategory: 'Vehicle Prize',
    amount: '€45,000',
    paragraphs: [
      'Ingrid, a graphic designer in Copenhagen, applied to PCH while visiting family in the United States. She had dual eligibility and submitted from her aunt\'s address in Minnesota.',
      'Months after returning to Denmark, Ingrid received a winner email for the Vehicle Prize. She chose the cash option, converted to euros, and bought an electric cargo bike for her design studio deliveries.',
      'The bike became part of her brand identity. Clients now recognize her arriving at meetings by bike with portfolio cases in the cargo box.',
      '"Not everyone needs a car," Ingrid says. "I applied to PCH, won a vehicle prize, and used it exactly the way my life required."',
    ],
  },
];
