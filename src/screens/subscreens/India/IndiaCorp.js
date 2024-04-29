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
      source={{ uri: 'https://source.unsplash.com/random' }}
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

