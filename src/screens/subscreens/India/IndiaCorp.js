import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const IndiaCorp = () => {
  const [showMore, setShowMore] = useState({
    'Tax credits and incentives': false,
    'Withholding taxes': false,
    'Tax administration': false,
    'Other issues': false,
  });

  const handleReadMore = (title) => {
    setShowMore({...showMore, [title]:!showMore[title] });
  };



  return (
    <ImageBackground
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' }}
      style={styles.background}
    >
    <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
    >


<OptionBlock
  title="Significant Developments"
  description="Last reviewed - 14 December 2023"
  textData={"However, non-residents or foreign companies can still avail the benefit of a lower tax rate provided in the tax treaties, subject to compliance with the treaty eligibility conditions."}
  onPress={() => handleReadMore('Significant Developments')}
  showMore={showMore['Significant Developments']}
>

<OptionBlock
  title="Increased Withholding Tax Rate (WHT) for Royalty and Fee for Technical Service (FTS) Payments Made to Non-Residents"
  description="The 10% special tax rate, as provided under the domestic tax laws, on royalty and FTS income earned by a non-resident or a foreign company that does not have permanent establishment (PE) in India has been increased to 20%. Accordingly, royalty/FTS incomes that are chargeable to tax for a non-resident on or after 1 April 2023 will require withholding of taxes at the rate of 20% plus applicable surcharge and cess under the domestic tax laws."
  textData={[["An amendment has been brought in to also include the consideration received from non-residents for issuance of shares to such non-residents. Therefore, starting 1 April 2023, if a non-resident subscribes to share capital of a closely held Indian entity that exceeds the face value of shares, then so much of the consideration that exceeds the FMV of the shares shall be taxable in India in the hands of such Indian entity."]]}
  onPress={() => handleReadMore('Increased WHT for Royalty and FTS Payments')}
  showMore={showMore['Increased WHT for Royalty and FTS Payments']}
/>


<OptionBlock
  title="Benefits Accruing on Account of Most Favoured Nation (MFN) Clauses"
  description="A position was/has been taken by a few non-resident companies that they are eligible to claim the benefits of the MFN clause as provided in the tax treaties entered into by India with the respective countries in which they operate as they were of the view that the MFN clause is self-operational and there is no requirement to issue a separate notification for the operation of the MFN clause. The aforesaid position was also upheld by the Delhi High Court in various judgements. However, the Indian tax authorities were not in agreement with the decision of the Delhi High Court and accordingly issued a circular wherein the position of the tax authorities was clearly laid down and it was provided that the MFN clause becomes operational only upon fulfilment of certain conditions as mentioned in the said circular. One such condition was that a separate notification importing such beneficial taxation into the tax treaty with the MFN clause, must be issued prior to the benefit being extended with respect to such MFN clause with respect to the jurisdiction in question."
 textData={"A quick snapshot of the impact of the above judgment on various payments made from India along with the relevant tax treaties is given below."}
 tableData={[
    { key: "Treaty with", value: "Rate under treaty", value2: "Lower rate claimed under MFN clause", comments: "Comments" },
    { key: 'Netherlands', value: '10%', value2: '5%', comments: 'Benefit of 5% rate (from the Slovenia, Lithuania, and Columbia) is no longer available.' },
    { key: 'France', value: '10%', value2: '5%', comments: '' },
    { key: 'Switzerland', value: '10%', value2: '5%', comments: '' },
    { key: 'Sweden', value: '10%', value2: '5%', comments: '' },
    { key: 'Hungary', value: '10%', value2: '5%', comments: '' },
  ]}
 textData1={[
   " B. Royalties and Fees for Technical Services (FTS)",
"(i) Rate of tax",
"The rate of tax under the India-Spain tax treaty is 20%. The lower rate of 10%, by virtue of the MFN clause, will no longer be available.",
"(ii) Restricted scope",
 ]}

  tableData00={[
    { key: "Treaty with", value: "Royalty", value2: "FTS", value3: "Exclusion for payments for the use of equipments", value4: "Benefit of the make available clause", value5: "Exclusion of managerial services" },
    { key: 'France', value: 'No longer available', value2: 'No longer available', value3: 'No longer available', value4: 'No longer available', value5: 'No longer available' },
    { key: 'Belgium', value: '-', value2: 'No longer available', value3: 'No longer available', value4: '', value5: 'No longer available' },
    { key: 'Spain', value: 'No longer available', value2: 'No longer available', value3: '-', value4: 'No longer available', value5: '' },
    { key: 'Sweden', value: '-', value2: 'No longer available', value3: 'No longer available', value4: '', value5: 'No longer available' },
  ]}
textData00={["A review petition has been filed before the Supreme Court against this judgement which is currently pending for final disposal."]}
 
  pointers = {[
    [
      "The Supreme Court of India in its judgement dated 19 October 2023 has held as under:",
      "- The MFN clause present in a tax treaty cannot lead to automatic import of favourable tax rate or scope of taxation extended to another country. In other words, India has to, as a matter of domestic legal procedure and past precedents, issue a separate notification so that benefits extended to a third country can be imported and made part of a tax treaty with the country with which it has an MFN clause.",
      "- The Supreme Court has further provided that for the beneficial provisions (agreed in another treaty entered into by India with any other jurisdiction) to be imported in the tax treaty relevant for the non-resident in question, the country with which such beneficial rate was agreed should have been a member of the OECD as on the date when such country had entered into the tax treaty with India. In other words, what is relevant for the application of the beneficial provision of the MFN clause is the date, when the tax treaty from which the beneficial provisions are being imported, was entered into and whether the country with which such treaty was entered into was a member of the OECD on the date when such country entered into with the tax treaty with India and not whether such country was a member of the OECD on the date when the benefit is being claimed by the non-resident in question.",
      "- The Supreme Court also held that the lower tax rate of 5% for dividends in India’s treaties with Slovenia, Lithuania and Columbia cannot be applied by giving effect to the MFN clause since these countries were not members of the OECD when the aforesaid lower rate of 5% was agreed with them in their respective tax treaties. Even otherwise, the benefit of the lower rate would not have been available in the absence of a specific notification by the Indian government specifically extending the beneficial rate agreed with such country to other countries."
    ]
  ]}
  
  
  onPress={() => handleReadMore('Benefits on MFN Clauses')}
  showMore={showMore['Benefits on MFN Clauses']}
/>






<OptionBlock
  title="Supreme Court Rules on Telecom License Fee"
  description="Telecom operators used to take a position that since the telecom license fee paid to Indian Government is on a revenue sharing basis under the Telecom Policy of 1999, the same should be considered as revenue in nature. The Delhi High Court had also upheld the aforesaid position and held that the telecom license fee paid before 31 July 1999 (date set out in policy) should be considered as capital in nature and fee paid after 31 July 1999 as revenue in nature."
  textData={["The Supreme Court has overruled the Delhi High Court and held that the payment of fees in instalments after 31 July 1999 would not change the character of the fees and character of the payment will remain the same as it was before 31 July 1999, i.e. the payment was capital in nature. The Supreme Court has held that the telecom license fee is capital in nature and has rejected the re-characterisation of license fee as partly revenue and partly capital."]}
  onPress={() => handleReadMore('Supreme Court Telecom License Fee')}
  showMore={showMore['Supreme Court Telecom License Fee']}
/>



<OptionBlock
  title="E-filing of Form 10F without Permanent Account Number"
  description="In order to be eligible to claim the tax treaty benefits, a non-resident is, inter alia, required to furnish certain details in Form 10F. The said form is required to be filed electronically on the income tax portal. The Central Board of Direct Taxes (CBDT) has enabled non-residents, who do not have a Permanent Account Number (i.e., tax identification number) and are not required to have a Permanent Account Number, to e-file Form 10F on the income-tax portal by creating an account without the requirement of first obtaining a Permanent Account Number."
  onPress={() => handleReadMore('E-filing of Form 10F without PAN')}
  showMore={showMore['E-filing of Form 10F without PAN']}
/>

<OptionBlock
  title="Relief to Eligible Start-ups"
  description="The domestic tax laws provide certain tax deductions to eligible start-ups, provided such eligible start-up is incorporated on or before 31 March 2023. The sunset clause of 31 March 2023 has now been extended to 31 March 2024."
  textData={"Further, eligible start-up can now carry forward and set off the losses for a period of ten years as compared to the earlier limit of seven years."}
  onPress={() => handleReadMore('Relief to Eligible Start-ups')}
  showMore={showMore['Relief to Eligible Start-ups']}
/>

<OptionBlock
  title="Income by way of interest from Indian company"
  description="The domestic tax law provides a beneficial WHT rate of 5% on interest income earned by any non-resident, subject to satisfaction of certain conditions. This beneficial rate was applicable for money borrowed by an Indian entity, by way of entering into a loan agreement or issuing bonds, before 1 July 2023. The aforesaid date has not been extended, hence interest income from an Indian company earned consequent to a loan agreement entered into or bond issued on or after 1 July 2023 shall be subject to withholding at the rate of 20% where the money is borrowed in foreign currency."
  onPress={() => handleReadMore('Income by way of interest from Indian company')}
  showMore={showMore['Income by way of interest from Indian company']}
/>

<OptionBlock
  title="Other Developments"
  description="Placeholder for other developments."
  onPress={() => handleReadMore('Other Developments')}
  showMore={showMore['Other Developments']}
>
<OptionBlock
  title="Withholding on winnings from online gaming"
  description="New tax provisions have been introduced under the domestic tax law to provide for taxation and withholding on winnings from online gaming. The net winning from online games are to be taxed at the rate of 30% (plus surcharge and cess). Further, taxes are required to be withheld at the end of the financial year (FY) or at the time of withdrawal from the user account, whichever is earlier."
  onPress={() => handleReadMore('Withholding on winnings from online gaming')}
  showMore={showMore['Withholding on winnings from online gaming']}
/>

<OptionBlock
  title="Speedy disposal of appeals"
  description="To enable the speedy disposal of appeals pending at the first appellate authority, a new appellate authority at the Joint Commissioner/Additional Commissioner level has been created to handle a certain class of cases involving low-value disputed tax demands."
  onPress={() => handleReadMore('Speedy disposal of appeals')}
  showMore={showMore['Speedy disposal of appeals']}
/>


</OptionBlock>


</OptionBlock>




<OptionBlock
  title="Corporate residence"
  description="Corporate residence determines whether a corporation is subject to tax on its worldwide income or only on income derived from within the country. It's an essential concept in international taxation."
  pointers = {[
    [
      "A company is treated as a resident of India in any previous year if:",
      "- it is an Indian company, or",
      "- its PoEM in that year is in India (see below)."
    ]
  ]}
  
  onPress={() => handleReadMore("Corporate residence")}
  showMore={showMore["Corporate residence"]}
>


<OptionBlock
  title="Place of effective management (PoEM)"
  description="A foreign company is considered resident in India if the control and management of its affairs is situated wholly in India. PoEM is a key criterion used to determine the tax residency of foreign companies."
  textData2={["To bring to tax those companies that are incorporated outside India but controlled from India, the condition of PoEM has been introduced. PoEM is an internationally recognised concept accepted by the Organisation for Economic Co-operation and Development (OECD).",
             "A foreign company will be regarded as a resident in India if its PoEM is in India in that year. Since ‘residency’ is determined for each year, PoEM is also required to be determined on a year-to-year basis. The concept of PoEM is one of substance over form. The term PoEM has been explained to mean a place where key management and commercial decisions that are necessary for the conduct of the business of an entity as a whole are, in substance, made. To provide clarity and address certain concerns for implementation of determination of residency of a foreign company on the basis of PoEM, the Indian Revenue Department has issued a circular laying down guidelines. The guidelines laid down the concept of determination of PoEM based on bifurcation of companies engaged in active business outside India and other companies. The circulars clarify that the PoEM provisions will not apply to a foreign company having turnover or gross receipts of INR 500 million or less in a tax year."]}

  onPress={() => handleReadMore("Place of effective management (PoEM)")}
  showMore={showMore["Place of effective management (PoEM)"]}
/>


<OptionBlock
  title="Permanent establishment (PE)"
  description="A PE in India is defined as a fixed place of business through which the business of an enterprise is wholly or partly carried on, or through an agent who habitually exercises authority to conclude contracts or regularly delivers goods or secures orders on behalf of a non-resident."
  onPress={() => handleReadMore("Permanent establishment (PE)")}
  showMore={showMore["Permanent establishment (PE)"]}
/>

<OptionBlock
  title="Business connection"
  description="The scope of 'business connection' was amended under the Income-tax Act to align with the modified PE Rule as per the Multilateral Instrument (MLI)."
  textData={["'Business connection' includes business activities carried on by a non-resident through dependent agents. The scope of 'business connection' under the Income-tax Act is similar to the provisions relating to Dependent Agent Permanent Establishment (DAPE) in India’s tax treaties. The amendment provides that business connection shall also include any business activities carried through a person who, acting on behalf of the non-resident, habitually concludes contracts or habitually plays the principal role leading to conclusion of contracts by the non-resident. "]}
  pointers={[[
    "- in the name of the non-resident",
    "- for the transfer of the ownership of, or for the granting of the right to use, property owned by that non-resident or that the non-resident has the right to use, or",
    "- for the provision of services by that non-resident."
  ],
  [ 
    "Further, as per the provisions of the Income-tax Act, 'significant economic presence' would also constitute a 'business connection' in India.",
  ],
  [
    "The term 'significant economic presence' has been modified, and the applicability of same has been deferred to FY 2021/22."
  ],
  [
    [
      "'Significant economic presence' means:",
      "- any transaction in respect of any goods, services, or property carried out by a non-resident with any person in India, including provision of download of data or software in India, if the aggregate of payments arising from such transaction or transactions during the previous year exceeds INR 20 million, or",
      "- systematic and continuous soliciting of business activities or engaging in interaction with 300,000 users in India."
    ]
  ]
  ]}

textData2={[
  "However, only so much of income as is attributable to such transactions or activities will be deemed to accrue or arise in India. It is also proposed that the transactions or activities will constitute significant economic presence in India, whether or not the non-resident has a residence or place of business in India or renders services in India.",
  "The income tax return forms applicable to companies (including foreign companies) have been updated for FY 2021/22 explicitly including disclosure of significant economic presence status of a foreign company in India during FY 2021/22."
]}
  onPress={() => handleReadMore("Business connection")}
  showMore={showMore["Business connection"]}
/>


</OptionBlock>



<OptionBlock
  title="Other taxes"
  description="Last reviewed - 14 December 2023"
  onPress={() => handleReadMore('Other taxes')}
  showMore={showMore['Other taxes']}
>

<OptionBlock
  title="Goods and Services Tax (GST)"
  description="GST is an indirect tax, which is a transaction-based taxation regime, that has been in effect in India since 1 July 2017."
  textData={["Multiple indirect taxes (except customs duty) have been subsumed within GST, and there is one single tax applicable on supply of goods and services. However, there are a few products that continue to be outside the ambit of GST, such as petrol, diesel, aviation turbine fuel (ATF), natural gas, alcohol for human consumption, and crude oil.",             "For smooth GST implementation, the government has formed a GST Council. The Council consists of the State Finance Ministers representing their states. The GST Council provides recommendations to the government on various aspects of GST law, such as rate revisions and amendments in GST rules, etc."]}
 
  onPress={() => handleReadMore('Goods and Services Tax (GST)')}
  showMore={showMore['Goods and Services Tax (GST)']}
>
<OptionBlock
  title="GST regime"
  description="GST is an indirect tax, which is a transaction-based taxation regime, that has been in effect in India since 1 July 2017."
  pointers = {[
    [
      "GST is a comprehensive ‘consumption tax’ levied on the supply of all goods and services. Indian GST is a dual model:",
      "- Central GST (CGST), levied by the Central Government.",
      "- State GST (SGST)/Union Territory GST (UTGST), levied by the State Governments/Union Territories."
    ],
    [
      "In case of intra-state supply of goods and services, CGST+SGST/UTGST would become applicable, and in case of inter-state supply of goods and services, Integrated GST (IGST) would become applicable. IGST is a sum of CGST and SGST/UTGST. The rate of GST varies from 5% to 28% depending upon the category of goods and services being supplied or procured, the general rate of tax being 18% for the majority of supplies. Additionally, some categories of goods/services, such as vehicles, aerated beverages, etc., notified by the government are subject to compensation cess under GST.",
    ],
    [  "The threshold limit for the purpose of obtaining GST registration is INR 2 million aggregate turnover in a financial year (INR 1 million for some special category states, such as the North-Eastern states). For the purpose of the threshold, aggregate turnover will be computed on a PAN-India basis. For some specific categories of supplies and suppliers, the registration requirement is mandatory.",
   
    ],
    [
      "However, the threshold for obtaining GST registration by a person who is engaged in exclusive intra-state supply of goods is INR 4 million aggregate turnover in a financial year, except in some specified cases.",
    ],
    [
      "Also, for some special category states making supply of goods/services (viz. Arunachal Pradesh, Himachal Pradesh, Meghalaya, Sikkim, and Uttarakhand), the threshold limit has increased from INR 1 million to INR 2 million. For other special category states, the threshold continues to be INR 1 million.",
    ],
    [ "Similar to previous VAT laws, there is a concept of composition scheme under GST for small traders. Small traders having turnover of INR 10 million have an option to avail a composition scheme. Under the said scheme, GST at a lower rate (1% of the taxable turnover for manufacturers/traders and 5% in case of restaurants) would apply. The option to avail such a scheme restricts the admissibility to avail input credit."
  ],
  [
    "Further, the option to pay tax under a composition scheme has been extended to services, except for the following:",
    "- Supply of services not leviable to tax under the CGST Act.",
    "- Inter-state outward supply of services.",
    "- Outward supply of services through an e-commerce operator."
  ]
  ]}
  
  onPress={() => handleReadMore('GST regime')}
  showMore={showMore['GST regime']}
/>
<OptionBlock
  title="Import of goods and services"
  description="The import of goods under the GST regime will be subject to IGST and compensation cess (if applicable), along with basic custom duty (BCD) and social welfare surcharge (up to 10% levied on the BCD). BCD and social welfare surcharge paid at the time of imports are not available as credit under GST; consequently, they will always be a cost to the importer."
  textData={[
   " Similar to erstwhile service tax laws, on import of service, service recipient would be liable to pay IGST under reverse charge. Also, there are specified categories of goods and services notified by the government on which GST needs to be paid by the recipient under reverse charge such as legal services, Goods Transport Agency services, etc.",
"CBIC vide Notification Nos. 11/2023, 12/2023 and 13/2023 dated 26 September 2023, has exempted the importers from paying IGST on ocean freight in CIF contracts. This is pursuant to the Supreme Court’s pronouncement in the matter of Moht Minerals."
  ]}
  onPress={() => handleReadMore('Import of goods and services')}
  showMore={showMore['Import of goods and services']}
/>

<OptionBlock
  title="Zero-rated supplies/export of goods and services"
  description="Export of goods and services are zero rated under GST. Exporters can claim refund of input tax credit (ITC) of inputs/input services used in export of goods/services, subject to fulfilment of prescribed conditions. To claim the zero rate on exports, there is a requirement to file a bond/Letter of Undertaking (LUT) to the jurisdictional tax authorities at the beginning of each financial year. Alternatively, the exporter can pay tax on output and claim refund for the same."
  textData={["Also, the supplies to an SEZ for authorised operations have been made zero rated under GST. Unlike the erstwhile indirect tax regime, which involved a lot of paperwork to claim export refund claims, a simplified online process to claim refund of exports has been specified under GST. The taxpayer is required to file a refund application and submit the relevant documents online on the GST portal.",
             "To facilitate trade for smaller exporters, the concept of 'merchant exporter' has been introduced under GST. Accordingly, the merchant exporters will now have to pay nominal GST of 0.1% for procuring goods from domestic suppliers for export, subject to specified conditions."
            ]}
            pointers = {[
              [
                "Some clarifications issued by the government in relation to claiming refunds are as follows:",
                "- Aadhaar authentication of registration made mandatory for being eligible for filing refund claim.",
                "- Bank account for credit of refund means such bank account of the applicant that is in the name of the applicant and obtained on one's Permanent Account Number (PAN).",
                "- Option for filing refund of accumulated ITC by taxpayers making exempt/nil-rated supplies, by selecting an option of not having an LUT number in the refund application (to enable a taxpayer making exempt and/or nil-rated supplies, without LUT, to file a refund application [as they don’t have a valid LUT number to enter in the refund application], the Form RFD-01 has now been modified).",
                "- To facilitate exporters, bunching of refund claims across financial years has now been allowed.",
                "- Previously, to claim a refund of zero-rated supply of services, there was a requirement to receive remittance in foreign exchange within a stipulated time period. Now this requirement has been extended to zero-rated supply of goods as well.",
                "- Refund of accumulated ITC is restricted to the amount appearing in Form GSTR-2A/2B. However, the department has now clarified that the restriction will not impact the refund of ITC availed on the invoices/documents relating to imports, Input Service Distributor (ISD) invoices, and the inward supplies liable to reverse charge (RCM supplies) merely because the same is not reflecting in Form GSTR-2A.",
                "- For export of goods, if unutilised ITC is claimed as refund, it is proposed to be mandated to realise the consideration in foreign currency within the timelines prescribed in the Foreign Exchange Management Act (FEMA) guidelines. If the consideration is not realised within the prescribed time, the refund needs to be remitted back to the government along with interest.",
                "- Refund of payment wrongly made through electronic credit ledger is allowed (refund amount would be re-credited to credit ledger).",
                "- Now, the Indian exporters undertaking export of services are receiving the export remittances in INR through the Special Rupee Vostro Accounts of correspondent bank of the partner trading country, opened by AD banks, the same will be considered to be fulfilling the conditions of export of services."
              ]
            ]}
            
  onPress={() => handleReadMore('Zero-rated supplies/export of goods and services')}
  showMore={showMore['Zero-rated supplies/export of goods and services']}
/>


<OptionBlock
  title="Input tax credit (ITC)"
  description="As per the ITC provisions stipulated under GST law, a registered taxable person is eligible to claim ITC of such goods and services that are used or intended to be used in the course or furtherance of business."
  pointers = {[
    [
      "However, there is a specified list of goods and services mentioned below where credit will not be available under GST:",
      "- Personal use of goods and services procured.",
      "- Goods and services being used for effecting exempt supplies.",
      "- Supply of the following goods and services:",
      "  - Motor vehicles (credit available in certain cases where used for transportation business).",
      "  - Specific credit restriction in respect of general insurance, servicing, repairs and maintenance, hiring, leasing, etc. in respect of motor vehicles, except when used for specified purposes (e.g. used in further supply of vehicles, for transportation of goods/passengers).",
      "  - Food and beverages, outdoor catering, beauty treatment, health services, cosmetic and plastic surgery, except where such inward supply of goods or services of a particular category is used by a registered taxable person for making an outward taxable supply of the same category of goods or services.",
      "  - Membership of a club, health, and fitness centre.",
      "  - Rent-a-cab, life insurance, health insurance, except where the government notifies the services that are obligatory for an employer to provide to its employees under any law for the time being in force.",
      "  - Travel benefits extended to employees on vacation, such as leave or home travel concession.",
      "  - Works contract services when supplied for construction of immovable property, other than plant and machinery, except where it is an input service for further supply of works contract service.",
      "  - Goods or services received by a taxable person for construction of an immovable property on one's own account, other than plant and machinery, even when used in the course or furtherance of business to the extent capitalized.",
      "  - Goods lost, stolen, destroyed, written off, or disposed of by way of gift or free samples."
    ]
  ]}
 textData2={["Having said the above, the ITC of goods and services that are obligatory for an employer to provide to its employees, under any law for the time being in force, is allowed.",
              "Under GST, taxpayers are allowed to take ITC and utilise the same for payment of output tax liability. However, no ITC on account of CGST can be utilised towards payment of SGST/UTGST and vice versa. The credit IGST credit needs to be first utilised towards payment of output IGST liability. The IGST credit can be utilised to offset CGST/SGST or UTGST output liability, as the case may be, in any order."
            ]} 
  onPress={() => handleReadMore('Input tax credit (ITC)')}
  showMore={showMore['Input tax credit (ITC)']}
/>

<OptionBlock
  title="Procedure for ITC availment"
  description="The procedure for availing Input Tax Credit (ITC) under the Goods and Services Tax (GST) involves maintaining proper documentation of tax invoices, debit notes, and other prescribed documents. The taxpayer should ensure that the supplier has filed their GST returns and paid the taxes due on the supplies. Once these conditions are met, the taxpayer can claim the ITC by including the eligible amount in their GST return for the relevant tax period."
  pointers = {[
    [ "",
      "Possession of tax invoice/debit note or any other credit availing document.",
      "Goods/services should have been received.",
      "ITC can be availed only on invoices/debit notes that have been furnished by the supplier in its Form GSTR-1 and are reflected in auto-populated Form GSTR-2A/2B of the buyer claiming ITC.",
      "The date of issuance of a debit note has been de-linked from the date of issuance of the underlying invoice for purposes of availing ITC. Given the same, ITC on debit notes is available irrespective of the date of invoice to which it relates (earlier there was a specified timeline to avail GST credit against a debit note). The functionality has been made effective on GST portal. Further, with effect from 1 January 2021, the date of issuance of debit note (not the date of underlying invoice) will determine the relevant financial year for the purpose of determining time period to avail credit as per the GST law.",
      "Where credit has been availed based on invoice, the recipient would be liable to pay credit so availed in case where return has not been furnished by the supplier.",
      "Penalty and prosecution provisions have been made more stringent in case of passing on or availing fraudulent ITC."
    ]
  ]}
  textData2={["Also, it is pertinent to note that the credit pool is state-specific (i.e. IGST, CGST, and SGST of one state cannot be used to offset output of IGST, CGST, and SGST liability of another state)."]}
  
  onPress={() => handleReadMore('Procedure for ITC availment')}
  showMore={showMore['Procedure for ITC availment']}
/>



<OptionBlock
  title="Compliance"
  description="Under the Goods and Services Tax (GST) regime, compliance involves various activities such as timely filing of GST returns, payment of taxes, maintenance of proper records and documentation, and adherence to GST rules and regulations. Taxpayers need to ensure that they accurately report their taxable transactions, reconcile input tax credits, and comply with GST audit requirements. Non-compliance can result in penalties, interest, and other adverse consequences."
  onPress={() => handleReadMore('Compliance')}
  showMore={showMore['Compliance']}
>




<OptionBlock
  title="Monthly returns"
  description="Under the GST regime, registered taxpayers are required to file monthly returns detailing their taxable supplies, input tax credits claimed, and tax liabilities. The main monthly return is the GSTR-3B, which summarizes the tax liability for the month and the input tax credit availed. Additionally, certain taxpayers may also need to file other monthly returns such as GSTR-1 (for outward supplies) and GSTR-2A (for inward supplies). These returns are filed electronically through the GSTN portal within the prescribed due dates."
  pointers = {[
    [
      "There are three monthly returns for a normal taxpayer under GST:",
      "- Form GSTR-1 for output (to be filed by the 11th day of the succeeding month). There is an option to file quarterly Form GSTR-1 returns (to be filed by the last day of the succeeding quarter) for suppliers whose turnover in the previous or current financial year was less than INR 15 million. Form GSTR-1 with no outward data can also be filed with a single click functionality on the GST portal.",
      "- Form GSTR-2 for ITC (by the 15th day of the succeeding month).",
      "- Form GSTR-3, a monthly tax return (by the 20th day of the succeeding month)."
    ]
  ]}

   textData2={[
               "The government has notified a requirement to file monthly Form GSTR-3B (to be filed by the 20th day of the succeeding month).",
               "Further, filing of Forms GSTR-2 and GSTR-3 continues to be suspended by the government.",
               "The government had proposed to implement a new GST return system. The existing returns Form GSTR 1/GSTR 3B would be revamped in lines with the new format. However, this has currently been kept in abeyance (i.e. the existing system of Forms GSTR-1 and GSTR-3B is to continue).",
               "Through the Finance Act for the year 2023-24, the government had proposed that a registered person will not be allowed to furnish the details of outward and inward supplies after the expiry of three years from the due date of furnishing of such details.",
               "The government through Notification No. 38/2023-Central Tax dated 4 August 2023 had provided for mandatory requirement to furnish bank account details on the portal before furnishing of Form GSTR-1/IFF or within 30 days from the grant of the registration (whichever is earlier), has been inserted and in case of contravention of this, there would be system-based suspension of registration. This was issued pursuant to the 50th GST Council meeting.",
               "For any difference between ITC available in Form GSTR-2B and availed in Form GSTR-3B, if increased by a prescribed amount or percentage, the taxpayer will be intimated in Part A of Form DRC-01C against which reply has to be filed by the taxpayer in Part B of Form DRC-01C. Similarly, in case the tax liability reported in Form GSTR-1 exceeds the liability reported in Form GSTR-3B, the taxpayer will be intimated in Part A of DRC-01B against which reply has to be filed otherwise the same will be recoverable under section 79."
   ]}
  onPress={() => handleReadMore('Monthly returns')}
  showMore={showMore['Monthly returns']}
/>

<OptionBlock
  title="Annual return"
  description="Taxpayers under the GST regime are required to file an annual return summarizing their financial activities for the entire financial year. This annual return, known as the GST Annual Return, must be filed by 31 December of the succeeding financial year. Additionally, suppliers with a turnover exceeding INR 50 million in a financial year are also mandated to file a self-certified GST Audit Report along with the annual return by the same due date."
  onPress={() => handleReadMore('Annual return')}
  showMore={showMore['Annual return']}
/>







</OptionBlock>


<OptionBlock
  title="Key updates"
  description=""
  onPress={() => handleReadMore('Key updates')}
  showMore={showMore['Key updates']}
  >


<OptionBlock
  title="Compliance related"
  description=""
  pointers = {[
    ["",
      "Facility to view and download Electronic Credit Ledger, Electronic Cash Ledger, and Electronic Liability Register from the GST portal is available for 12 months (earlier this facility was available for six months).",
      "A download facility is available on the CBIC/ GST portal for the entire Harmonised System of Nomenclature (HSN) directory in Excel format has also been provided to taxpayers under the link 'Download HSN in Excel Format'. This facility is available as a part of the ‘Search HSN’ functionality, available both in Pre and Post Login.",
      "The taxpayers having annual aggregate turnover up to INR 20 million are exempted from the requirement of furnishing annual return onwards of FY 2020/21.",
      "Effective from 1 September 2021, the GSTN portal will check whether, before the filing of Form GSTR-1 of a tax-period, the following has been filed or not:",
      "- Form GSTR-3B for the previous month (for monthly filers), or",
      "- Form GSTR-3B for the previous quarterly tax period (for quarterly filers), as the case may be.",
      "Form GSTR-1 filing has been made mandatory before filing of Form GSTR-3B for the concerned month.",
      "Taxpayers whose annual aggregate turnover in the preceding financial year is above INR 50 million shall furnish ITC-04 (job work return) once in six months commencing on 1 April and 1 October.",
      "Taxpayers whose annual aggregate turnover in the preceding financial year is up to INR 50 million shall furnish ITC-04 once in a financial year.",
      "A self-service functionality has been made available on the GST Portal that can be used to search Bill of Entry (BOE) details, which did not auto-populate in GSTR-2A, in GST System, and fetch the missing records from ICEGATE.",
      "It usually takes two days (after reference date, either out of charge date, duty payment date, or amendment date, whichever is later) for BOE details to get updated on the GST Portal from ICEGATE.",
      "Enabled furnishing of nil return in Form GSTR 3B or in Form GSTR-1 for a tax period through a SMS using the registered mobile number, which shall be verified based on one-time password facility.",
      "An auto-populated ITC statement Form GSTR-2B facility has been enabled from 12 September 2020 (available on 14th of subsequent month) capturing details of credit available on import of goods, domestic procurement, etc. Basis statement taxpayers can reconcile credit to be availed/revered in monthly Form GSTR-3B. With effect from January 2022, only the credit that reconciles with GSTR-2B can be availed. No excessive credit permitted to be availed. Unreconciled credit can be carried forward to the next month’s compliance period for reconciliation with Form GSTR-2B. Such carry forward of credit can be made till the 30th day of November of the succeeding year, post which the credit would lapse.",
      "As per a Notification dated 28 September 2022, the government has made an amendment within the Finance Act, 2022 to specify that all year-end adjustments (i.e. availment of credit, reporting of credit/debit notes) can be made till 30 November of the succeeding financial year. Previously, such a timeline was specified as last date for filing of return for the month of September of succeeding financial year.",
      "Central Board of Indirect Taxes and Customs (CBIC) Notification, dated 5 July 2022, notified amendment made in section 50(3) of the Central Goods and Services Tax Act, 2017 implementing the proposal within the Finance Act, 2022, wherein, it has been specified that interest on delayed payment of tax would be levied only in cases where the taxpayer has wrongly availed and utilised credit.",
      "New HSN disclosure norms applicable from 1 April 2021. This is in respect of HSN reporting of supply of goods or services at the time of filing GST returns. The requirement of quoting HSN as per table below has been mandated on E-way bills and E-Invoices, respectively.",
      "A GST Officer can proceed for cancellation of GSTIN where a taxpayer avails ITC exceeding that permissible in Section 16 of CGST Act, 2017 (i.e. not reconciling with Form GSTR 2B).",
      "Where the liability declared in Form GSTR-3B is less than that declared in Form GSTR-1 in a particular month, department may now proceed with cancellation of GSTIN.",
      "Now, no opportunity of being heard shall be given to a taxpayer for suspension of GSTIN, where the proper officer has reasons to believe that the registration of person is liable to be cancelled.",
      "Where a GSTIN is suspended, no refund under Section 54 of Central Goods and Services Tax Act, 2017 can be availed by the taxpayer.",
      "Where a taxpayer fails to file Form GSTR-3B for two subsequent months, Form GSTR-1 shall now be blocked.",
      "The government through Notification 14/2022-Central Tax dated 5 July 2022 has introduced certain changes in Form GSTR-3B, such as reporting of ineligible credit, reporting of credit reversals, etc. Further, a new table 3.1.1 has also been introduced, whereby, electronic commerce operators can disclose supplies on which tax is to be paid by them.",
      "Pursuant to the above said notification, the CBIC has issued an advisory to clarify that the impact of credit notes and their amendments will now be auto-populated in Table 4(A) (i.e. ITC available) instead of Table 4(B) (i.e. ITC reversed) of Form GSTR-3B. Further, taxpayers can now enter negative values in Table 4A and 4D (2) of Form GSTR-3B.",
      "The GSTN portal with a perspective to streamline the credit reversal and reclaim of ITC, has introduced the electronic credit reversal and reclaimed statement to validate the taxpayer’s reclaimed ITC.",
      "In order to introduce uniformity in the reporting disclosure of reversal of input credit within Form GSTR-3B, amendments in Table-4 of Form GSTR-3B were introduced vide Notification No. 14/2022 dated 5 July 2022 read with Circular No. 170/02/2022-GST dated 6 July 2022. Post such amendments, the total input credit as reflected in the Form GSTR-2B (including ineligible credit) is auto-populated in Table-4A of Form GSTR-3B. Correspondingly, the total credit as available in Form GSTR-2B is bifurcated into the following two streams:",
      "- Permanent reversal of ineligible input credit in accordance with the provisions of rules 38/42/43 and section 17(5) of Central Goods and Service Tax Act, 2017.",
      "- Temporary reversal of credit to be reported under Table-4(B) (2) of Form GSTR-3B.",
      "Upon reclaiming of such credit in future, taxpayers to report it within Table-4A (5) and Table-4D (1).",
      "Pursuant to the Notification No. 56/2023 dated 28 December 2023, the timelines for issuance of order under section 73(9) of the Central Goods and Service Tax Act, 2017 for recovery of tax short paid or ITC wrongly availed, as stipulated under section 73(10) of the Central Goods and Service Tax Act, 2017 was extended as below.",
      "- For the FY 2018-19 upto 30 April 2024",
      "- For the FY 2019-20 upto 31 August 2024"
    ]
  ]}
  tableData1={[
    { key: "Aggregate turnover in the preceding financial year", value: "Number of digits of HSN code" },
    { key: "Below INR 50 million", value: "4 (not required for B2C invoices)" },
    { key: "Above INR 50 million", value: "6" },
  ]}
  onPress={() => handleReadMore('Compliance related')}
  showMore={showMore['Compliance related']}
/>


<OptionBlock
  title="Clarifications"
  description=""
  pointers= {
[   [ "", 
      "There is no need to carry a physical copy of tax invoice if the invoice has been generated with a QR code containing an IRN.",
      "A company incorporated in India and a foreign company are separate entities under GST law, not considered as mere establishments of a distinct person.",
      "Time period to claim refund of tax paid on an intra-state/inter-state supply subsequently held to be inter-state/intra-state supply is two years from the date of payment of tax under the correct head.",
      "Service provided by cloud kitchens/central kitchens falls under 'restaurant services' and attracts 5% GST without ITC.",
      "Sale of pre-manufactured ice cream by ice cream parlors is considered as sale of goods and not a service, attracting 18% GST.",
      "GST implications clarified on liquidated damages, compensation, and penalties, stating amounts paid to compensate for injury, loss, or damage are not liable to GST.",
      "Guidelines issued for disallowing debit of electronic credit ledger.",
      "Clarification issued on classification of intermediary services.",
      "Director's remuneration declared as 'salaries' is not subject to GST, while remuneration subject to tax deducted at source is liable to GST under reverse charge.",
      "Formula for claiming refund under inverted duty structure modified, and certain goods specified against which refund of unutilised credit would not be allowed.",
      "GST rates revised for various goods and services based on GST Council meeting held on 18 July 2022.",
      "Notification amended to include supply of services of renting residential property from an unregistered person to a registered person under reverse charge.",
      "Activity of providing corporate guarantee treated as a taxable supply, even without consideration, with taxable value determined as higher of 1% of guarantee offered or actual consideration.",
      "No GST payable on personal guarantee offered by directors to banks against credit limits/loans sanctioned to the company if no consideration paid by the company to directors.",
      "RCM not applicable on services supplied by a director to the company in personal capacity, such as renting immovable property.",
      "Supply of foods or beverages in cinema halls taxed as restaurant service; if sold with tickets, it's a composite supply taxed based on cinema exhibition.",
      "Manufacturers/distributors not required to charge GST on free warranty replacement of parts/repair services, no need for ITC reversal.",
      "Holding shares of subsidiary company by holding company not treated as supply of services, outside purview of GST.",
      "Online gaming, actionable claims in casinos taxed at 28% from 1 October 2023.",
      "Transmission of ITC through ISD gradually made mandatory, though not yet notified.",
      "Show cause notice under section 74 of CGST Act, 2017 issued to taxpayers only in cases of fraud, wilful misstatement, or suppression of facts to evade tax in investigating secondment arrangements of overseas employees within group companies."
    ]]
  }
  
  onPress={() => handleReadMore('Clarifications')}
  showMore={showMore['Clarifications']}
/>



<OptionBlock
  title="SEZ-related updates"
  description=""
  pointers = {["",
    "A new declaration has been introduced in the SEZ online portal while filing the DTA Procurement Form (Goods) and DSPF (services) confirming that the supplies are availed by an SEZ entity from DTA for authorized operations only.",
    "Ad hoc extension till 30 June 2020 had been provided for undertaking compliances filing of SOFTEX, Annual Performance Reports, Extension of Letter of Approval (LoA), etc. For ease of doing business on account of the COVID-19 outbreak, revised guidelines for work from home have been issued. Further, the last date of filing ARPs/QPRs by SEZ units/Developers/EOUs has been extended to 31 December 2020. This had been further extended to 31 December 2021 and further extended again to 30 June 2022.",
    "The government has amended the SEZ rules to permit IT/ITeS units in SEZs to allow 100% of their workforce to work from home (WFH) till 31 December 2023, subject to certain conditions.",
    "A uniform list of services to SEZ for day-to-day operations has been notified to avoid the requirement of getting approval from the Development Commissioner.",
    "The time period for renewal of Registration Cum Membership Certificates (RCMCs) has been extended. The RCMC is issued by the relevant Export Promotion Council and is valid for a particular period. The Directorate General of Foreign Trade has directed the concerned licensing authorities not to seek an RCMC in cases where the validity expired on or before 31 March 2020 for grant of export benefits/incentives. This dispensation would remain in force till 30 September 2020. Considering this, SEZ units can renew an RCMC granted by the Export Promotion Council for EOU and SEZ (EPCES) till 30 September 2020.",
    "Development Commissioners have been requested to advise State Government/Private SEZs to consider similar relief measures.",
    "In the Union Budget for FY 2022/23, the government proposed to replace the existing law governing SEZs with a new legislation, proposals of which include incentives, such as retention of zero-rating of IGST on domestic procurement by a unit in an SEZ, continuation of indirect tax benefits to developers of these zones, and allowing depreciation on sale of used capital goods cleared to domestic tariff areas. The new legislation is envisaged to enable states to become partners in 'Development of Enterprise and Service Hubs' (DESHs).",
    "A new facility has been implemented in the SEZ Online System regarding Service Exports Filing (SERF) to declare the foreign currency value of the transaction, and the system will automatically calculate and present the rupee value based on the exchange rates present in the system for the invoice date. This facility is already available in 'Softex Forms' and now it has been extended to 'SERF' as well. Also, in case of non-standard currencies (if any), the exchange rate declared by the user will be considered for calculating the rupee value.",
    "Facility for Online Payment of Customs Duty (SEZ to DTA transactions) is being significantly enhanced to enable net-banking facility and API-based processing. This will be an additional facility (i.e. in addition to existing facility of NEFT/RTGS-based payments). SEZ online has initiated testing with ICEGATE for the same. ICEGATE is expected to enable this from 1 April 2023 tentatively."
  ]}
  
  onPress={() => handleReadMore('SEZ-related updates')}
  showMore={showMore['SEZ-related updates']}
/>


<OptionBlock
  title="Concept of e-invoicing under GST"
  description="The government introduced an e-invoicing system under GST laws with effect from 1 October 2021."
  pointers = {[
    [
      "A summary of the key aspects of the proposed e-invoicing system is briefly explained below:",
      "- The e-invoicing (for B2B invoices/GST registered recipients) was made mandatory from 1 October 2021 for the taxpayers whose aggregate turnover in a financial year (in any of the last three financial years) exceeded INR 500 million.",
      "- The applicability of the e-invoicing threshold was INR 5 billion till 31 December 2020 and INR 1 billion till 31 March 2021, which was further revised to INR 500 million with effect from 1 April 2021, INR 200 million with effect from 1 April 2022, and INR 100 million with effect from 1 October 2022.",
      "- The turnover limit for e-invoicing purposes has been revised to INR 50 million with effect from 1 August 2023.",
      "- E-invoicing is a system in which invoices would be authenticated electronically by a portal of the government.",
      "- The companies would need to submit details related to the invoice on the government approved/authorised portal known as the Invoice Registration Portal (IRP), which would issue a unique identification number (i.e. Invoice Registration Number [IRN]) and QR code against every invoice.",
      "- Without an IRN/QR code, the invoice issued by the company would be invalid and the recipient company would not be eligible to avail credit.",
      "- All invoice information will be transferred from the IRP to the GST portal (of both supplier and recipient).",
      "- Certain classes of registered persons (insurance company, banking company, financial institution, non-banking financial institution, GTA, passenger transportation service, SEZ units, government departments and local authorities, persons supplying services by way of admission to the exhibition of cinematographic films in multiplex services, etc.) are exempted from issuing e-invoices or capturing dynamic QR codes.",
      "- Further, effective from 1 October 2021, for invoices issued to unregistered customers (B2C), such taxpayers are required to issue/capture dynamic QR code on the invoice. The purpose of dynamic QR code is to encourage digital payments where buyers can scan the dynamic QR code and make payment from mobile wallet directly.",
      "- According to an update on e-invoice portal, with effect from 1 November 2023, it has been decided to impose a time limit of 30 days on reporting of old invoices (including debit notes & credit notes as well) on the e-invoice portal for taxpayers with turnover greater than or equal to 1 billion."
    ]
  ]}
  
  onPress={() => handleReadMore('Concept of e-invoicing under GST')}
  showMore={showMore['Concept of e-invoicing under GST']}
/>

<OptionBlock
  title="Other GST returns"
  description="With effect from 1 October 2018, the government has made tax deducted at source/tax collected at source provisions stipulated under GST laws effective."
  textData={["Tax deducted at source provisions are applicable on cases specified under section 52 of the Central Goods and Services Tax Act, 2017. The notified taxpayers, like the government, Public Sector Undertakings, etc., are required to deduct 2% tax (1% CGST, 1% SGST, or 2% IGST) on payments made for goods/services to suppliers where payment exceeds INR 0.25 million. The tax so collected would be available as credit to the supplier in its electronic cash register, which can be used for set-off against future tax liabilities.",
             "Tax collected at source provisions are applicable for e-commerce operators. Every e-commerce operator is required to deduct 1% tax (0.5% CGST, 0.5% SGST, or 1% IGST) on net value of supplies provided by suppliers through the e-commerce operator's portal. As per the Notification, for the supplies made through the platform of an e-commerce operator, tax is to be paid by the said e-commerce operator. Further, such transactions are to be reported by the e-commerce operator within their Form GSTR-3B.",
             "The requirement of issuance of the tax deducted at source certificate under GST laws has been relaxed (post acceptance of tax deducted at source by deductee on GST portal, it shall be electronically available on GST portal).",
              "The due date of filing the tax collected at source return (Form GSTR-8) is the 10th day of the next month. "
            ]} 
  onPress={() => handleReadMore('Other GST returns')}
  showMore={showMore['Other GST returns']}
/>


<OptionBlock
  title="E-way bills"
  description="The e-way bill is an electronic bill that will be required for the movement of goods in case the value of the consignment is above INR 50,000. The movement of goods may be (i) in relation to supply, (ii) for reasons other than supply, or (iii) due to inward supply from unregistered persons."
  textData={[
              "The e-way bill can be generated from the GSTN portal, and every GST-registered taxpayer is required to comply with the requirement to issue an e-way bill.",
              "With effect from 16 November 2018, new enhancements have been made in the e-way bill system, which involves checking of duplicate e-way bills, complete knock down/semi knock down movement of goods imported/exported, shipping address to be mentioned on e-way bill for goods exported outside India, etc.",
              "A rule was inserted such that a person, including consignor, consignee, transporter, courier agency, or an e-commerce operator, who has not filed their GST returns for two consecutive tax periods will not be allowed to generate an e-way bill. ",
              "In cases where the principal supply is purely a supply of service and involving no movement of goods, the e-way bill is not required to be generated.",
              "However, in cases where, along with the principal supply of service, movement of some goods is also involved, the e-way bill may be generated. Such situations may arise in cases of supply of services like printing services, works contract services, catering services, pandal or shamiana services, etc. In such cases, the e-way bill may be generated by entering the details of HSN code of the goods, along with SAC (Service Accounting Code) of services involved."
  ]}
  onPress={() => handleReadMore('E-way bills')}
  showMore={showMore['E-way bills']}
/>

<OptionBlock
  title="Advance rulings for Customs and GST"
  description="To enable foreign investors to ascertain their indirect tax liabilities arising from proposed business ventures in India, the Central Government has constituted the Authority for Advance Rulings (AAR) as a high-level, quasi-judicial body. The functions of the AAR consist of giving advance rulings on a specific set of facts relating to specified matters under Customs and GST."
  textData={["Advance rulings may be sought by any resident/non-resident investor entering into a joint venture in India in collaboration with another non-resident or resident of India, or by a resident setting up a joint venture in India in collaboration with a non-resident. This facility has also been made available to existing joint ventures in India. The Central Government is also empowered to include any other class or category of persons as eligible for the benefit of an advance ruling. Under the customs law, the Central Government has allowed a ‘resident public limited company’ to be eligible for an advance ruling. Under the erstwhile excise and service tax regime, advance rulings could be given only on a proposed transaction, whereas under GST, advance rulings can be obtained on a proposed transaction as well as a transaction being undertaken by the appellant."]}
  pointers = {[
    [
      "In terms of GST provisions, the following matters/questions specified can be sought before the AAR:",
      "- Classification of any goods or services, or both.",
      "- Applicability of a notification issued under the provisions of the Central Goods and Services Tax Act, 2017.",
      "- Determination of time and value of supply of goods or services, or both.",
      "- Admissibility of ITC of tax paid or deemed to have been paid.",
      "- Determination of the liability to pay tax on any goods or services, or both.",
      "- Whether applicant is required to be registered.",
      "- Whether any particular thing done by the applicant with respect to any goods or services, or both, amounts to or results in a supply of goods or services, or both, within the meaning of that term."
    ]
  ]}
  textData2={["The comprehensive provision for advance rulings is provided under GST to ensure that disputes are minimal. Timelines are also given within which the ruling is to be given by the concerned authority. The aim is to provide certainty to the taxpayer with respect to one's obligations under the Central Goods and Services Tax Act, 2017 and an expeditious ruling, so that the relationship between the taxpayer and administration is smooth and transparent and avoids unnecessary litigation."]}
  
  onPress={() => handleReadMore('Advance rulings for Customs and GST')}
  showMore={showMore['Advance rulings for Customs and GST']}
/>

<OptionBlock
  title="Amnesty scheme under indirect tax"
  description="Various states (viz. Gujarat, Maharashtra, Karnataka, Haryana, etc.) have introduced amnesty schemes for settlement of past VAT dues with waiver (certain percentage) of tax dues, interest, and penalty dues, subject to fulfilment of prescribed conditions."
  textData={[
    "Late fees for composition dealers have been reduced to INR 500 through Notification No. 2/2023-Central Tax, dated 31 March 2023, in case of delayed filing of GSTR-4 from 1 July 2017 to 31 March 2022, provided that the taxpayer’s file it on or before 30 June 2023. Further, if the tax payable is nil, then no late fees is required to be paid.",
    "As per Notification No. 2/2023-Central Tax, dated 31 March 2023, the taxable person whose registration got cancelled on account of non-filing of returns and who had failed to file revocation within the time limit (i.e. 30 days) can now apply for revocation of cancellation up to 30 June 2023 only after furnishing the returns due till effective date of cancellation along with due tax, interest, penalty, and late fee.",
    "Best judgement assessment order shall be deemed to be withdrawn, provided returns along with interest and late fees have been filed up to 30 June 2023.",
   " The late fees for delayed furnishing of the annual return for FY 2017/18 to FY 2021/22 has been reduced through Notification No. 7/2023-Central Tax, dated 31 March 2023, to INR 20,000 (CGST 10,000 + SGST 10,000), provided such return has been furnished up to 30 June 2023. "
  ]}
  pointers = {[
    [
      "The time limit for passing order under section 73(10) (i.e. non-fraud cases) has been extended by further three months in each of FY 2017/18, 2018/19, and 2019/20, as follows:",
      "- FY 2017/18: 31 December 2023.",
      "- FY 2018/19: 31 March 2024.",
      "- FY 2019/20: 30 June 2024."
    ],
    [
      "CBIC extended the time limit for availing the benefit of amnesty schemes as stated above which were notified dated 31 March 2023, till 31 August 2023."
    ],
    [
      "Time limit for filing appeal against demand orders under sections 73 and 74 issued till 31 March 2023 has been extended to 31 January 2024. The extension is subject to making a pre-deposit of 12.5% (as against 10%) of the tax under dispute (with at least an incremental 2.5% to be discharged from the electronic cash ledger)."
    ]
  ]}
  
  onPress={() => handleReadMore('Amnesty scheme under indirect tax')}
  showMore={showMore['Amnesty scheme under indirect tax']}
/>


</OptionBlock>




</OptionBlock>



<OptionBlock
  title="Customs duty"
  description="Customs duty is levied by the Central Government on goods imported into, and exported from, India. The rate of customs duty applicable to a product imported or exported depends upon its classification under the Customs Tariff Act, 1975. With regard to exports from India, customs duty is levied only on a very limited list of goods."
  textData={["The Customs Tariff is aligned with the internationally recognised HSN provided by the World Customs Organisation (WCO).",
             "Customs duty is levied on the transaction value of the imported or exported goods. According to the Customs Act, the concept of transaction value is the sole basis for valuation for the purpose of import and export of goods. While the general principles adopted for valuation of goods in India are in conformity with the World Trade Organisation (WTO) agreement on customs valuation, the Central Government has framed independent Customs Valuation Rules that apply to the export and import of goods."
]}
pointers = {[
  [
      "The customs duty applicable to any product is composed of a number of components, which are as follows:",
      "- The import of goods under the GST regime will be subject to IGST and compensation cess (if applicable).",
      "- BCD is the basic component of customs duty levied at the effective rate under the First Schedule to the Customs Tariff Act (CTA) and applied to the landed value of the goods (i.e. the cost, insurance, and freight [CIF] value of the goods). The peak rate of BCD is 10%.",
      "- BCD and social welfare surcharge (up to 10% levied on the BCD). BCD and social welfare surcharge paid at the time of imports are not available as credit under GST; consequently, they will always be a cost to the importer.",
      "- With effect from 2 February 2020, health cess at 5% is to be levied on import of medical devices to support health infrastructure."
  ]
]}
textData2={["The Directorate General of Foreign Trade (DGFT) has notified procedure for applying for 'amnesty scheme' for one-time settlement of default in export obligation by Advance and Export Promotion Capital Goods (EPCG) Authorisation holders.",
            "Customs duties on several items have been revised by the Budget FY 2023/24. On a few items, such as gold, platinum, and aeroplanes, the amount of cess has been increased with a corresponding decrease in customs duties.",
            "The CBIC has issued series of notifications pursuant to the announcement of the new Foreign Trade Policy, 2023 (FTP); These, inter alia, include notifications regarding exemption for import of fabrics under Special Advance Authorisation (AA) Scheme, implementation of EPCG Scheme, Duty Free Import Authorisation (DFIA) Scheme, AA Scheme for export of prohibited goods, and implementation of AA Scheme for deemed exports under the new FTP.",
            "The CBIC has decided to implement an electronic cash ledger (ECL) in phased manner for importers and exporters. The phased introduction is aimed at leveraging technology and reforming the payment process, inter alia, related to clearance of goods as the deposit may be held in ECL by the trade for making subsequent transaction-wise payments of various types.",
        ]}
  onPress={() => handleReadMore('Customs duty')}
  showMore={showMore['Customs duty']}
/>


<OptionBlock
  title="Property taxes"
  description="Property tax is levied by the governing authority of the jurisdiction in which the property is located. The rate of tax levied varies from city to city in India and is generally related to the prevailing market prices for property in each locality."
  onPress={() => handleReadMore('Property taxes')}
  showMore={showMore['Property taxes']}
/>

<OptionBlock
  title="Stamp duties"
  description="Stamp duty is a government tax that is levied on all legal property transactions. Stamp duty is a tax that is paid as evidence for any purchase or sale of a property between two or more parties. Stamp papers, which are bought either in the name of the buyer or seller, are valid for six months, provided the stamp duty is paid without any delay. No document that has not been duly stamped can be introduced as evidence in any court proceedings. Stamp duty is charged at both central and state levels. State level stamp duties vary from state to state, and on the document type. Stamp duty should be paid in full without any delay, failing which, a penalty is levied. Stamp duty has to be paid prior to execution (signature by an individual’s party) of a given document, the next day, or on the day of document execution. Stamp duty is paid by a buyer in most cases. However, both the seller and the buyer have to bear the burden of stamp duty for property exchange cases. Stamp duty rates differ in various states across the country, as stamp duty in India is a state subject. However, the Central Government fixes the stamp duty rates of specific instruments."
  onPress={() => handleReadMore('Stamp duties')}
  showMore={showMore['Stamp duties']}
/>

<OptionBlock
  title="Equalisation levy"
  description="Action Plan 1 (Digital Economy) of the OECD’s BEPS project discussed several options to tackle direct tax challenges in the digital environment."
  pointers = {[
    [
        "An equalisation levy is available, the summary of which is as follows:",
        "- Rate of levy: 6% of the amount of consideration for specified service.",
        "- Meaning of ‘specified service’: Online advertisement, any provision for digital advertising space, or any other facility or service for the purpose of online advertisement, which includes any other service as may be notified by the Central Government in this regard.",
        "- On whom: Non-resident receiving consideration for specified services from:",
        "  - a person resident in India and carrying on business or profession, or",
        "  - a non-resident having a PE in India.",
        "- Exemption from income tax: The income arising to the non-resident from the specified service and chargeable to an equalisation levy will be exempt from income tax.",
        "- With effect from 1 April 2020, equalisation levy is extended to include transactions where consideration exceeding INR 20 million is received/receivable by a non-resident ‘e-commerce operator’ for ‘e-commerce supply or services’ made/provided/facilitated on or after 1 April 2020. Rate of equalisation levy on such transactions will be at the rate of 2%. This will include the following transactions where services are provided by e-commerce operator to:",
        "  - a person resident in India",
        "  - a non-resident in specified circumstances, or",
        "  - a person who buys goods/services using an IP address located in India.",
        "- Non-applicability in specified cases: Equalisation levy will not be charged in the following cases:",
        "  - The non-resident providing specified service has a PE in India and the specified service is effectively connected with the PE.",
        "  - The aggregate consideration received or receivable in the previous year by the non-resident does not exceed INR100,000.",
        "  - The payment for the specified service by the Indian resident or PE is not for conducting business or a profession in India."
    ],
    [
      "The Finance Act, 2021 has amended the provisions of equalisation levy to clarify that ’online sale of goods‘ and ’online provision of services‘ will include one or more of the following online activities:",
      "- Acceptance of offer for sale.",
      "- Placing the purchase order.",
      "- Acceptance of the purchase order.",
      "- Payment of consideration.",
      "- Supply of goods or provision of services, partly or wholly."
  ],
  [
    "Consideration received or receivable from e-commerce supply or services will include:",
    "- Consideration for sale of goods, irrespective of whether the e-commerce operator owns the goods, and",
    "- Consideration for provision of services, irrespective of whether service is provided or facilitated by the e-commerce operator."
]
]}
textData2={[
  "In addition to the above, it has been provided that the consideration taxable as royalty or fees for technical services will not be subjected to Equalisation levy.",
  "These amendments have been made effective retrospectively from 1 April 2020.",
  "Further, withholding tax (WHT) provisions on e-commerce operators making payments to resident e-commerce participants were introduced. These provisions provides that e-commerce operator making payment to resident e-commerce participant will withhold taxes at the rate of one percent of the gross amount of sales/services. The e-commerce participant means as an Indian resident who is selling goods or providing services or both through digital or electronic facility or platform. These provisions are applicable from 1 October 2020.",
  "Compliances under Equalisation levy provisions:"
]}

  onPress={() => handleReadMore('Equalisation levy')}
  showMore={showMore['Equalisation levy']}
/>


<OptionBlock
  title="Virtual digital assets (VDAs): Crypto taxation"
  description="Finance Act, 2022 has introduced provisions to bring VDAs (including crypto currencies, NFTs, etc) into tax ambit. The gains arising on transfer of VDAs would be taxable at 30% without providing any deduction of expenses other than cost of acquisition. Further, any loss arising on transfer of VDAs is not permitted to be set-off against any other income in the current year or subsequent years. Tax is to be deducted at 1% payment to a resident on transfer of VDAs with effect from 1 July 2022."
  onPress={() => handleReadMore('Virtual digital assets (VDAs): Crypto taxation')}
  showMore={showMore['Virtual digital assets (VDAs): Crypto taxation']}
/>

<OptionBlock
  title="Buyback of shares"
  description="An additional tax is payable on transactions involving buyback of shares by Indian companies from its shareholders. A tax at 20% (plus surcharge at 12% and health and education cess at 4%) is payable by the company on the difference of consideration paid on buyback and the issue price of shares. The CBDT has prescribed the methodology for determination of amount received for issue of shares under 12 different situations, being a subject matter of tax on buyback. The buyback consideration received will be tax exempt in the hands of the receiver. No tax credit will be allowed in case of such taxes paid either to the company or to the shareholder."
  onPress={() => handleReadMore('Buyback of shares')}
  showMore={showMore['Buyback of shares']}
/>

<OptionBlock
  title="Securities transaction tax (STT)"
  description="STT is applicable to transactions involving the purchase/sale of equity shares, derivatives, units of equity-oriented funds through a recognised stock exchange, or the purchase/sale of a unit of an equity-oriented fund to any mutual fund. The STT leviable in respect of such transactions varies for each kind of instrument, whether delivery based or non-delivery based. Rate of STT varies from 0.001% to 0.125%, depending upon the nature of securities. However, securities transacted by any person on a recognised stock exchange located in an International Financial Services Centre where the consideration for such transaction is paid or payable in foreign currency are not subject to STT."
  onPress={() => handleReadMore('Securities transaction tax (STT)')}
  showMore={showMore['Securities transaction tax (STT)']}
/>

<OptionBlock
  title="Taxability of Partnership/ LLP"
  description="A partnership firm and an LLP are taxed as separate legal entities. The share of income of partners from a partnership firm or an LLP is exempt from tax. Partnerships and LLPs are taxed at 31.2% (inclusive of surcharge and health and education cess) if the income is less than INR 10 million and 34.944% (inclusive of surcharge and health and education cess) if the income exceeds INR 10 million. Alternate minimum tax at the rate of 18.5% applies to a partnership/LLP."
  textData={["The interest payment to partners on capital or current account is allowed as tax-deductible expenditure. However, the maximum interest rate allowable for tax purposes is 12% per annum. A working partner can be paid salary, bonus, commission, or remuneration. The maximum permissible deduction in respect of remuneration payable collectively to all working partners is based on the book profit of the firm, at slab rates for different levels of book profit."]}
  onPress={() => handleReadMore('Taxability of Partnership/ LLP')}
  showMore={showMore['Taxability of Partnership/ LLP']}
/>
<OptionBlock
  title="Payroll taxes and social security payments"
  description="Please see Social security contributions in the Other taxes section of the Individual tax summary."
  onPress={() => handleReadMore('Payroll taxes and social security payments')}
  showMore={showMore['Payroll taxes and social security payments']}
/>









</OptionBlock>  










<OptionBlock
  title="Branch income"
  description="Branches of foreign companies are taxed on income that is received in India, or which accrues or arises in India, at the rates applicable to foreign companies. There is no WHT on remittance of profits by the branch to its head office."
  onPress={() => handleReadMore('Branch income')}
  showMore={showMore['Branch income']}
/>








<OptionBlock
  title="Taxes on corporate income"
  description="A resident company is taxed on its worldwide income. A non-resident company is taxed only on income that is received in India, or that accrues or arises, or is deemed to accrue or arise, in India."
  textData={["The corporate income tax (CIT) rate applicable to an Indian company and a foreign company for the tax year 2022/23 is as follows:"]}
  tableData={[
    { key: "Income*", value: "CIT rate (%)", value2: "CIT rate (%)", value3: "CIT rate (%)", value4: "CIT rate (%)", value5: "CIT rate (%)", value6: "CIT rate (%)" },
    { key: "< 10 million INR", value: "25", value2: "26.00", value3: "30", value4: "31.20", value5: "40", value6: "41.60" },
    { key: "> 10 million but < 100 million INR", value: "25", value2: "27.82", value3: "30", value4: "33.38", value5: "40", value6: "42.43" },
    { key: "> 100 million INR", value: "25", value2: "29.12", value3: "30", value4: "34.94", value5: "40", value6: "43.68" },
  ]}
  textData1={["* Surcharge of 10% is payable only where total taxable income exceeds INR 10 million." ,
  " ** Effective tax rates include surcharge and health and education cess of 4%. "]}
  onPress={() => handleReadMore('Taxes on corporate income')}
  showMore={showMore['Taxes on corporate income']}
>



<OptionBlock
  title="Reduced rate of tax for certain existing domestic companies"
  description="Under the domestic tax laws, certain existing domestic companies may be eligible for a reduced rate of tax. This reduced rate is applicable subject to meeting specific conditions as outlined in the tax regulations."
  pointers = {[
    [
      "A beneficial CIT rate of 22% (plus surcharge of 10% and applicable health and education cess of 4%) can be availed with effect from tax year 2019/20. This beneficial rate is at the option of the company and is applicable on satisfaction of the following conditions, cumulatively:",
      "- The company has not claimed a tax holiday available to a unit in a Special Economic Zone (SEZ), benefit of accelerated depreciation, or benefit of additional depreciation, investment allowances, expenditure on scientific research, and any deduction in respect of certain income other than deduction in respect of employment of new employees and deduction of certain income of Offshore Banking Units and International Financial Service Centre.",
      "- The company has not claimed set-off of loss and unabsorbed depreciation carried forward from any earlier years including set-off of any unabsorbed depreciation and losses relating to loss/depreciation on amalgamation, provided such loss is attributable to the deductions referred to in (i) above. However, the corresponding adjustment in written down value of such block of asset as on 1 April 2019 will be allowed in the prescribed manner.",
      "- The option of seeking the benefit of a reduced CIT rate of 22% is furnished in the prescribed manner before the due date of furnishing of income.",
      "- Companies exercising this option have been excluded from the applicability of provisions of minimum alternate tax (MAT) and MAT credit."
    ]
  ]}
  textData2={["Benefit of the above provision of reduced tax rate will not be available in the year of non-compliance and all the subsequent years and other provisions of the Income-tax Act will apply as if the option has not been exercised from the year of non-compliance."]}
  onPress={() => handleReadMore('Reduced rate of tax for certain existing domestic companies')}
  showMore={showMore['Reduced rate of tax for certain existing domestic companies']}
/>


<OptionBlock
  title="Reduced rate of tax for newly set-up domestic manufacturing companies and companies engaged in generation of electricity"
  description="A beneficial CIT rate of 15% (plus surcharge of 10% and applicable health and education cess of 4%) with effect from tax year 2019/20 for newly set-up domestic manufacturing companies can be availed. The benefit of concessional tax rate of 15% has been extended to domestic companies engaged in the business of generation of electricity from tax year 2020/21."
  pointers = {[
    [
      "The beneficial rate of 15% (plus surcharge of 10% and applicable health and education cess) can be exercised at the option of the company and is applicable on satisfaction of the following conditions, cumulatively:",
      "- The company is incorporated on or after 1 October 2019 and commences manufacture or production of any article or thing on or before 31 March 2024.",
      "- The 'business' is not formed by splitting up or reconstruction of business already in existence (exception provided for undertaking formed as a result of re-establishment, reconstruction, or revival of business).",
      "- Does not use plant and machinery previously used for any purpose in India, and no depreciation has been claimed on the same.",
      "- Does not use any building previously used as a hotel or convention centre for which deductions under provisions of the Income-tax Act have been claimed or allowed.",
      "- The company is not engaged in any business other than the business of manufacture or production of any article or thing and research or distribution of such article or thing manufactured or produced. The following businesses will not be treated as business of manufacture or production of any article or thing:",
      "    - Development of computer software in any form or in any media.",
      "    - Conversion of marble blocks or similar items into slabs.",
      "    - Bottling of gas into cylinder.",
      "    - Printing of books or production of cinematograph films.",
      "    - Any other business notified in this behalf.",
      "- The company has not claimed a benefit for establishing its unit in an SEZ, benefit of accelerated depreciation, or benefit of additional depreciation, investment allowances, expenditure on scientific research, and any deduction in respect of certain income other than deduction in respect of employment of new employees.",
      "- The company has not claimed set-off of loss and unabsorbed depreciation carried forward from any earlier years, including set-off of any unabsorbed depreciation and losses relating to loss/depreciation on amalgamation, provided such loss is attributable to the deductions referred to in (vi) above.",
      "- In case difficulty arises in non-fulfilment of certain conditions in this section, the Indian Revenue Department may issue guidelines for removing the difficulty.",
      "- The option of seeking the benefit of a reduced CIT rate of 15% is furnished in the prescribed manner before the due date of furnishing of income.",
      "- Domestic transfer pricing provision will be applicable for these companies.",
      "- Companies exercising this option have been excluded from the applicability of provisions of MAT and MAT credit."
    ]
  ]}

  textData2={["Benefit of the above provision of reduced tax rate will not be available in the year of non-compliance and all the subsequent years and other provisions of the Income-tax Act will apply as if the option has not been exercised from the year of non-compliance. However, such company may exercise an option to be governed under provisions of reduced tax rate of 22% (plus surcharge of 10% and applicable health and education cess)."]}
  onPress={() => handleReadMore('Reduced rate of tax for newly set-up domestic manufacturing companies and companies engaged in generation of electricity')}
  showMore={showMore['Reduced rate of tax for newly set-up domestic manufacturing companies and companies engaged in generation of electricity']}
/>




<OptionBlock
  title="Minimum alternative tax (MAT)"
  description="Companies exercising the option of a lower tax rate of 22% (discussed above) have been excluded from the applicability of provisions of MAT and MAT credit."
 textData={["Companies that continue to pay taxes under the existing tax regime (not exercising the option under the alternative tax regime as discussed above) are liable to pay MAT on their adjusted book profits (other than income from life insurance business) where the tax liability under the normal provisions (excluding surcharge and health and education cess) of the Income-tax Act for the tax year is not more than 15% (excluding surcharge and health and education cess) of such book profits.",
            "MAT credit is the amount paid over and above the normal tax liability, which can be carried forward and can be utilised for 15 years. However, MAT credit to the extent of difference between the foreign tax credits allowed against MAT over such credit allowable against the tax under the other provisions of the Income-tax Act will not be eligible to be carried forward.",
            "MAT provisions are not applicable to foreign companies that do not have a PE in India. However, MAT provisions will not apply to foreign companies where their total income is solely derived from shipping business, exploration of mineral oils, business of aircraft, civil construction in turnkey projects and income thereon is offered to tax as per specific provisions provided under the Income-tax Act.",
            "The existing tax rates under MAT are provided in the below table:"
           ]}
          tableData={[
             { key: "Income*", value: "MAT rate (%)", value2: "MAT rate (%)", value3: "MAT rate (%)", value4: "MAT rate (%)" },
             { key: "< 10 million INR", value: "15", value2: "15.600", value3: "15", value4: "15.600" },
             { key: "> 10 million but < 100 million INR", value: "15", value2: "16.692", value3: "15", value4: "15.912" },
             { key: "> 100 million INR", value: "15", value2: "17.472", value3: "15", value4: "16.380" },
           ]}
           textData1={["* Surcharge of 10% is payable only where total taxable income exceeds INR 10 million.",
                       "** Basic rate of MAT is 9% of book profits in case of a corporate and non-corporate taxpayer located in an International Financial Services Centre and deriving income solely in convertible foreign exchange.",
                      "*** Effective tax rates include surcharge and health and education cess."
                    ]}
         
         
 
  onPress={() => handleReadMore('Minimum alternative tax (MAT)')}
  showMore={showMore['Minimum alternative tax (MAT)']}
/>


<OptionBlock
  title="Local income taxes"
  description="There are no local, state, or provincial taxes on income in India at present."
  onPress={() => handleReadMore('Local income taxes')}
  showMore={showMore['Local income taxes']}
/>











    </OptionBlock>
























































</ScrollView>
    </ImageBackground>
  );
};

const OptionBlock = ({
  title,
  description,
  newComponent,
  readMoreText,
  subheading,
  tableData,
  tableData00,
  tableData1,
  pointers,
  onPress,
  showMore,
  children,
  order,
  textData,
  textData00,
  textData1,
  textData2,
  textData3,
  image,
}) => {

  return (
    <TouchableOpacity style={[styles.button, styles.card]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>{title}</Text>
      {showMore? (
        <>
         {(order || []).map((componentKey) => components[componentKey])}
           <Text style={styles.optionText}>{description}</Text>
           
           {Array.isArray(textData) ? textData.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text>{textData}</Text>}

           {image && <Image source={image} style={styles.image} />}
          {subheading && <Text style={styles.subheading}>{subheading}</Text>}
          
               

        {tableData && (
          <View style={styles.table}>
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.entries(row).map(([key, value], cellIndex) => (
                  <Text key={cellIndex} style={key === 'key' ? styles.tableCellKey : styles.tableCellValue}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
          
          {Array.isArray(textData1) ? textData1.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData1}</Text>}
          
          {/* {pointers && (
            <View style={styles.pointersContainer}>
              {pointers.map((pointer, index) => (
                <Text key={index} style={styles.pointer}>
                 {'\u2022'} {pointer}
                </Text>
              ))}
            </View>
          )} */}


{tableData00 && (
          <View style={styles.table}>
            {tableData00.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.entries(row).map(([key, value], cellIndex) => (
                  <Text key={cellIndex} style={key === 'key' ? styles.tableCellKey : styles.tableCellValue}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}




{Array.isArray(textData00) ? textData00.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData00}</Text>}

           {pointers && pointers.map((pointerArray, index) => (
            <View key={index} style={styles.pointersContainer}>
              {pointerArray.map((pointer, index) => (
                 <Text key={index} style={index === 0 ? styles.description : styles.pointer}>
                 {index === 0 ? pointer : '\u2022 ' + pointer}
               </Text>
              ))}
            </View>
          ))}
          {Array.isArray(textData2) ? textData2.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData2}</Text>}
          
           {typeof children === 'string' ? <Text>{children}</Text> : children}


           {tableData1 && (
          <View style={styles.table}>
            {tableData1.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.entries(row).map(([key, value], cellIndex) => (
                  <Text key={cellIndex} style={key === 'key' ? styles.tableCellKey : styles.tableCellValue}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
         {Array.isArray(textData3) ? textData3.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData3}</Text>}
        </>
      ) : (
        <Text style={styles.optionText}>{description ? description.substring(0, 100) : ''}...</Text>
      )}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.readMoreText}>{showMore? 'Show Less' : 'Read More'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({


  image: {
    width: 100, // or whatever width you want
    height: 100, // or whatever height you want
  },

  
  textData: {
    padding: 10,
    paddingVertical: 10,
    fontSize: 14,
    color: '#ffffff',
  },
  
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    maxWidth: '100%',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    borderRadius: 12,
    border: '1px solid rgba(255, 255, 255, 0.125)',
    marginBottom: 20,
    padding: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  optionText: {
    color: '#ffffff',
  },
  readMoreText: {
    color: '#ffffff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },


subheading: {
    fontSize: 20,
    color: '#FF5733',
    marginTop: 10,
  },
  pointer: {
    fontSize: 18,
    color: '#008CBA',
    marginTop: 5,
    textAlign: 'left',
    
    },
    tableHeaderKey: {
      width: '40%',
      backgroundColor: '#333', // change this to your desired color
    },
    tableHeaderValue: {
      width: 'auto',
      maxWidth: '60%',
      backgroundColor: '#333', // change this to your desired color
     
    },
    tableHeaderCell: {
      flex: 1,
      color: '#fff', // change this to your desired color
      fontWeight: 'bold',
      marginHorizontal: 5,
    }, 
  table: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tableCellKey: {
    width: '40%',
    color: '#fff',
  },
  tableCellValue: {
    width: 'auto',
    maxWidth: '30%',
    textAlign: 'center',
    color: '#fff',
  },
  pointersContainer: {
    marginTop: 10,
  },
  description: {
    color: '#ffffff',
    fontSize: 20, 
    fontWeight: 'bold', 
  },
});

export default IndiaCorp;

