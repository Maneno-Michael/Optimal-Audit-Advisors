import {
  Calculator,
  BookOpen,
  Scale,
  Briefcase,
  Globe2,
  FileText,
  ShieldCheck,
  Building2,
  ArrowLeftRight,
  LucideIcon,
} from 'lucide-react'

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceProcess {
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceData {
  id: string
  slug: string
  title: string
  shortDescription: string
  icon: LucideIcon
  heroImage: string
  fullDescription: string
  features: ServiceFeature[]
  benefits: string[]
  process: ServiceProcess[]
  faqs: ServiceFAQ[]
}

export const servicesData: ServiceData[] = [
  {
    id: 'payroll',
    slug: 'payroll-services',
    title: 'Payroll Services',
    shortDescription:
      'Comprehensive payroll management ensuring timely processing and full compliance with Kenyan labor laws.',
    icon: Calculator,
    heroImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Managing payroll is more than just writing checks. It involves complex calculations, tax withholdings, and strict adherence to labor laws. Our Payroll Services are designed to take this burden off your shoulders, ensuring your employees are paid accurately and on time, every time. We handle everything from salary computation to statutory deductions (PAYE, NSSF, NHIF, Housing Levy) and filing of returns.',
    features: [
      {
        title: 'Salary Processing',
        description:
          'Accurate calculation of basic pay, allowances, overtime, and bonuses.',
      },
      {
        title: 'Statutory Compliance',
        description:
          'Deduction and remittance of PAYE, NSSF, NHIF, and Housing Levy.',
      },
      {
        title: 'Payslip Generation',
        description:
          'Digital or printed payslips for all employees with clear breakdowns.',
      },
      {
        title: 'Leave Management',
        description:
          'Tracking of annual, sick, and maternity leave days and allowances.',
      },
    ],
    benefits: [
      'Eliminate payroll errors and employee complaints',
      'Ensure 100% compliance with KRA and labor laws',
      'Save time and administrative costs',
      'Maintain confidentiality of sensitive data',
    ],
    process: [
      {
        title: 'Data Collection',
        description: 'We gather attendance records and variable pay data.',
      },
      {
        title: 'Computation',
        description:
          'We calculate gross to net pay, including all statutory deductions.',
      },
      {
        title: 'Review & Approval',
        description: 'You review the payroll register for final approval.',
      },
      {
        title: 'Disbursement & Filing',
        description: 'Salaries are paid and statutory returns are filed.',
      },
    ],
    faqs: [
      {
        question: 'Do you handle statutory filings?',
        answer:
          'Yes, we file all monthly statutory returns including PAYE, NSSF, NHIF, and Housing Levy on your behalf.',
      },
      {
        question: 'Can you handle different pay cycles?',
        answer:
          'Absolutely. We can manage weekly, bi-weekly, or monthly pay cycles depending on your business needs.',
      },
    ],
  },
  {
    id: 'accounting',
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDescription:
      'Accurate financial record keeping to help you monitor performance and make informed business decisions.',
    icon: BookOpen,
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Accurate financial records are the backbone of any successful business. Our Accounting & Bookkeeping services provide you with a clear picture of your financial health. We move beyond simple data entry to provide meaningful insights. From maintaining ledgers to preparing complex financial statements, we ensure your books are audit-ready and compliant with International Financial Reporting Standards (IFRS).',
    features: [
      {
        title: 'Ledger Maintenance',
        description: 'Recording of all daily financial transactions.',
      },
      {
        title: 'Bank Reconciliation',
        description:
          'Matching bank statements with internal records to ensure accuracy.',
      },
      {
        title: 'Financial Reporting',
        description:
          'Preparation of Profit & Loss, Balance Sheet, and Cash Flow statements.',
      },
      {
        title: 'Accounts Payable/Receivable',
        description: 'Managing what you owe and what is owed to you.',
      },
    ],
    benefits: [
      'Real-time visibility into financial performance',
      'Easier tax filing and audit preparation',
      'Better cash flow management',
      'Informed decision-making based on accurate data',
    ],
    process: [
      {
        title: 'Setup',
        description:
          'We set up your chart of accounts and accounting software.',
      },
      {
        title: 'Recording',
        description: 'Daily or weekly recording of transactions.',
      },
      {
        title: 'Reconciliation',
        description: 'Monthly reconciliation of bank and credit card accounts.',
      },
      {
        title: 'Reporting',
        description:
          'Delivery of monthly management accounts and financial reports.',
      },
    ],
    faqs: [
      {
        question: 'Which accounting software do you use?',
        answer:
          'We are proficient in QuickBooks, Xero, Sage, and can adapt to your preferred system.',
      },
      {
        question: 'How often will I receive reports?',
        answer:
          'We typically provide monthly management accounts, but can customize reporting frequency to your needs.',
      },
    ],
  },
  {
    id: 'taxation',
    slug: 'taxation-compliance',
    title: 'Taxation & Tax Compliance',
    shortDescription:
      'Strategic tax planning and filing to minimize liability while ensuring full adherence to KRA regulations.',
    icon: Scale,
    heroImage:
      'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Navigating the ever-changing tax landscape in Kenya can be daunting. Our Taxation & Compliance services are designed to minimize your tax liability while ensuring full compliance with the Kenya Revenue Authority (KRA). We take a proactive approach, advising you on tax implications before you make business decisions, rather than just reporting on them afterwards.',
    features: [
      {
        title: 'Tax Planning',
        description: 'Strategic advice to legally minimize tax liabilities.',
      },
      {
        title: 'Tax Filing',
        description:
          'Preparation and filing of Income Tax, VAT, MRI, and other returns.',
      },
      {
        title: 'KRA Audit Support',
        description:
          'Representation and support during KRA audits and compliance checks.',
      },
      {
        title: 'Tax Health Checks',
        description:
          'Review of past records to identify risks and opportunities.',
      },
    ],
    benefits: [
      'Avoid penalties and interest for non-compliance',
      'Optimize tax efficiency',
      'Peace of mind knowing experts are handling your taxes',
      'Quick resolution of tax disputes',
    ],
    process: [
      {
        title: 'Assessment',
        description:
          'We review your business structure and current tax status.',
      },
      {
        title: 'Planning',
        description: 'We develop a tax strategy tailored to your business.',
      },
      {
        title: 'Compliance',
        description: 'Timely preparation and filing of all required returns.',
      },
      {
        title: 'Advisory',
        description: 'Ongoing advice on tax law changes and implications.',
      },
    ],
    faqs: [
      {
        question: 'Can you help with KRA penalties?',
        answer:
          'Yes, we can assist in applying for waivers and negotiating payment plans for outstanding penalties.',
      },
      {
        question: 'Do you handle personal income tax?',
        answer:
          'Yes, we assist individuals with filing their annual income tax returns.',
      },
    ],
  },
  {
    id: 'advisory',
    slug: 'business-advisory',
    title: 'Business Advisory Services',
    shortDescription:
      'Expert guidance on business structure, growth strategies, and financial optimization for sustainable success.',
    icon: Briefcase,
    heroImage:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Your business needs more than just an accountant; it needs a strategic partner. Our Business Advisory Services provide the insights and guidance necessary to drive growth and operational efficiency. Whether you are restructuring, expanding, or looking to improve profitability, we offer practical solutions grounded in financial data and market reality.',
    features: [
      {
        title: 'Strategic Planning',
        description: 'Developing long-term goals and actionable roadmaps.',
      },
      {
        title: 'Financial Modeling',
        description: 'Creating forecasts and budgets to guide decision making.',
      },
      {
        title: 'Risk Management',
        description:
          'Identifying and mitigating financial and operational risks.',
      },
      {
        title: 'Process Improvement',
        description:
          'Optimizing internal controls and workflows for efficiency.',
      },
    ],
    benefits: [
      'Clear strategic direction',
      'Improved operational efficiency',
      'Better financial control',
      'Support for critical business decisions',
    ],
    process: [
      {
        title: 'Discovery',
        description: 'Understanding your business goals and challenges.',
      },
      {
        title: 'Analysis',
        description: 'Deep dive into your financial and operational data.',
      },
      {
        title: 'Strategy',
        description: 'Developing tailored solutions and recommendations.',
      },
      {
        title: 'Implementation',
        description: 'Assisting with the execution of the strategy.',
      },
    ],
    faqs: [
      {
        question: 'Is this service only for large companies?',
        answer:
          'No, we tailor our advisory services to suit startups, SMEs, and large corporations.',
      },
      {
        question: 'Can you help with raising capital?',
        answer:
          'We can assist in preparing the necessary financial documents and business plans required by investors and lenders.',
      },
    ],
  },
  {
    id: 'diaspora',
    slug: 'diaspora-tax-services',
    title: 'Kenya Diaspora Tax Services',
    shortDescription:
      'Specialized tax solutions for Kenyans living abroad, managing local investments and compliance.',
    icon: Globe2,
    heroImage:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Kenyans living abroad often face unique challenges when it comes to managing their tax obligations back home. Whether you have investments, property, or business interests in Kenya, our Diaspora Tax Services ensure you remain compliant without the hassle. We bridge the gap, acting as your trusted representative on the ground.',
    features: [
      {
        title: 'iTax Registration',
        description: 'Assistance with PIN registration and updates.',
      },
      {
        title: 'Investment Advisory',
        description: 'Tax implications of real estate and other investments.',
      },
      {
        title: 'Filing Returns',
        description:
          'Filing of nil returns or income declarations for local income.',
      },
      {
        title: 'Amnesty Applications',
        description: 'Assistance with voluntary tax disclosure programs.',
      },
    ],
    benefits: [
      'Compliance with Kenyan laws while abroad',
      'Protection of local assets from tax liens',
      'Expert advice on double taxation treaties',
      'Hassle-free management of local obligations',
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Virtual meeting to understand your status and needs.',
      },
      {
        title: 'Review',
        description: 'Analysis of your local income sources and obligations.',
      },
      {
        title: 'Filing',
        description: 'Preparation and submission of necessary returns.',
      },
      {
        title: 'Monitoring',
        description: 'Ongoing monitoring of your tax status.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to file taxes if I live abroad?',
        answer:
          'If you have a KRA PIN, you are required to file returns, even if it is a nil return. If you have Kenyan income, it must be declared.',
      },
      {
        question: 'How do we communicate?',
        answer:
          'We use secure digital channels, video calls, and email to manage everything remotely.',
      },
    ],
  },
  {
    id: 'vat',
    slug: 'vat-filing',
    title: 'VAT Filing Services',
    shortDescription:
      'Timely and accurate Value Added Tax computation and filing to avoid penalties and interest.',
    icon: FileText,
    heroImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Value Added Tax (VAT) compliance is critical for businesses in Kenya. Errors can lead to significant penalties and cash flow issues. Our VAT Filing Services ensure that your input and output VAT are correctly computed, reconciled, and filed on time. We also assist with VAT refunds and deregistration where applicable.',
    features: [
      {
        title: 'VAT Computation',
        description: 'Accurate calculation of VAT payable or refundable.',
      },
      {
        title: 'Monthly Filing',
        description: 'Timely submission of VAT returns via iTax.',
      },
      {
        title: 'ETIMS Support',
        description:
          'Guidance on Electronic Tax Invoice Management System compliance.',
      },
      {
        title: 'Refund Claims',
        description: 'Processing and following up on VAT refund claims.',
      },
    ],
    benefits: [
      'Avoidance of late filing penalties',
      'Accurate input tax claims',
      'Compliance with ETIMS regulations',
      'Improved cash flow management',
    ],
    process: [
      {
        title: 'Data Review',
        description: 'Review of sales and purchase invoices for the month.',
      },
      {
        title: 'Reconciliation',
        description: 'Reconciling VAT ledger with ETIMS records.',
      },
      {
        title: 'Filing',
        description: 'Submission of the return on iTax before the 20th.',
      },
      {
        title: 'Payment/Claim',
        description: 'Generating payment slips or processing refund claims.',
      },
    ],
    faqs: [
      {
        question: 'What is the deadline for VAT filing?',
        answer:
          'VAT returns must be filed and paid by the 20th of the following month.',
      },
      {
        question: 'Can you help with ETIMS integration?',
        answer:
          'Yes, we advise on the selection and implementation of ETIMS compliant invoicing solutions.',
      },
    ],
  },
  {
    id: 'audit',
    slug: 'auditing-assurance',
    title: 'Auditing and Assurance',
    shortDescription:
      'Independent examination of financial statements to provide credibility and assurance to stakeholders.',
    icon: ShieldCheck,
    heroImage:
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Stakeholders, investors, and lenders need to trust your financial numbers. Our Auditing & Assurance services provide an independent, objective examination of your financial statements. We go beyond the numbers to understand your business environment, identifying risks and opportunities for improvement in your internal controls.',
    features: [
      {
        title: 'Statutory Audit',
        description: 'Annual audit in compliance with the Companies Act.',
      },
      {
        title: 'Internal Audit',
        description:
          'Review of internal controls and risk management processes.',
      },
      {
        title: 'Forensic Audit',
        description: 'Investigation of financial discrepancies and fraud.',
      },
      {
        title: 'Project Audit',
        description: 'Audit of specific projects for donors or grantors.',
      },
    ],
    benefits: [
      'Enhanced credibility with banks and investors',
      'Identification of control weaknesses',
      'Compliance with statutory requirements',
      'Prevention and detection of fraud',
    ],
    process: [
      {
        title: 'Planning',
        description: 'Understanding the entity and assessing risk.',
      },
      {
        title: 'Fieldwork',
        description: 'Testing controls and substantive procedures.',
      },
      {
        title: 'Review',
        description: 'Analyzing findings and discussing with management.',
      },
      {
        title: 'Reporting',
        description: 'Issuing the independent auditor’s report.',
      },
    ],
    faqs: [
      {
        question: 'Is an audit mandatory?',
        answer:
          'For limited companies in Kenya, an annual statutory audit is generally required.',
      },
      {
        question: 'How long does an audit take?',
        answer:
          'The duration depends on the size and complexity of the business, typically ranging from 2 to 4 weeks.',
      },
    ],
  },
  {
    id: 'rental',
    slug: 'rental-income-tax',
    title: 'Monthly Rental Income Tax',
    shortDescription:
      'Management of monthly rental income tax obligations for landlords and property managers.',
    icon: Building2,
    heroImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      'Property owners in Kenya are required to pay tax on rental income. The Monthly Rental Income (MRI) tax regime simplifies this for residential property owners. We assist landlords and property agents in computing and filing MRI returns, ensuring compliance and avoiding the harsh penalties associated with non-compliance in the real estate sector.',
    features: [
      {
        title: 'MRI Computation',
        description:
          'Calculating tax at 10% of gross rent for eligible landlords.',
      },
      {
        title: 'Return Filing',
        description: 'Monthly filing of MRI returns on iTax.',
      },
      {
        title: 'Record Keeping',
        description: 'Maintaining rent rolls and expense records.',
      },
      {
        title: 'Annual Returns',
        description: 'Filing for landlords not under the MRI regime.',
      },
    ],
    benefits: [
      'Simplified tax compliance for landlords',
      'Avoidance of KRA enforcement actions',
      'Proper documentation of rental income',
      'Peace of mind for property investors',
    ],
    process: [
      {
        title: 'Rent Roll Review',
        description: 'Collating monthly gross rent data.',
      },
      { title: 'Computation', description: 'Calculating the tax payable.' },
      { title: 'Filing', description: 'Submitting the return by the 20th.' },
      {
        title: 'Advisory',
        description: 'Advice on allowable deductions if filing annually.',
      },
    ],
    faqs: [
      {
        question: 'Who qualifies for MRI?',
        answer:
          'Residential landlords earning between Ksh 288,000 and Ksh 15 million annually.',
      },
      {
        question: 'Can I deduct expenses under MRI?',
        answer:
          'No, MRI is a gross tax. Expenses are not deductible. If you have high expenses, the annual regime might be better.',
      },
    ],
  },
  {
    id: 'transfer',
    slug: 'transfer-pricing',
    title: 'Transfer Pricing',
    shortDescription:
      "Advisory on inter-company transactions to ensure compliance with arm's length principles.",
    icon: ArrowLeftRight,
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80',
    fullDescription:
      "For businesses with related parties or multinational operations, Transfer Pricing is a critical compliance area. KRA requires that transactions between related parties be conducted at arm's length. We help you document your transfer pricing policies and prepare the necessary documentation to justify your pricing to tax authorities.",
    features: [
      {
        title: 'Policy Design',
        description: 'Developing robust transfer pricing policies.',
      },
      {
        title: 'Documentation',
        description: 'Preparation of Master File and Local File.',
      },
      {
        title: 'Benchmarking',
        description: "Comparative analysis to determine arm's length range.",
      },
      {
        title: 'Compliance Review',
        description: 'Reviewing existing policies against current laws.',
      },
    ],
    benefits: [
      'Mitigation of transfer pricing adjustments',
      'Compliance with global BEPS standards',
      'Reduced risk of double taxation',
      'Defensible positions during audits',
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Mapping out related party transactions.',
      },
      { title: 'Benchmarking', description: 'Finding comparable market data.' },
      {
        title: 'Documentation',
        description: 'Drafting the transfer pricing policy document.',
      },
      {
        title: 'Review',
        description: 'Annual review and update of the policy.',
      },
    ],
    faqs: [
      {
        question: 'When is transfer pricing documentation required?',
        answer:
          'It is required if you have transactions with related parties, especially cross-border ones.',
      },
      {
        question: "What happens if I don't have a policy?",
        answer:
          'KRA may deem your prices non-compliant and impose significant tax adjustments and penalties.',
      },
    ],
  },
]
