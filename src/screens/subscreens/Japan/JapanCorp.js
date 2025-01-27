import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const JapanCorp = () => {
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
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png' }}
      style={styles.background}
    >
    <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
    >




<OptionBlock
  title="Significant developments"
  description=""
  
  onPress={() => handleReadMore('Significant developments')}
  showMore={showMore['Significant developments']}
>



<OptionBlock
  title="2023 Tax Reform Act"
  description="Approved by the Diet on 28 March 2023 and promulgated on 31 March 2023, the 2023 Tax Reform Act and related Enforcement Orders and Regulations are effective for corporate tax years beginning on or after 1 April 2023."
  textData={[
    "The 2023 Tax Reform Act provides for tax measures to grow the economy and distribute wealth fairly by promoting investment in markets, industries, and human resources. In response to changes in the international taxation environment as a result of the Organisation for Economic Co-operation and Development’s (OECD’s) introduction of a global minimum tax, as well as a need to reflect changes in the structure of the domestic economy brough on by the declining birth rate and aging population, the Tax Reform Act includes both changes to existing tax laws as well as the introduction of new provisions.",
    "In order to fund increased defence spending, one major change to the domestic corporate tax rules is the introduction of a corporate income surtax of 4% to 4.5% for large enterprises (which will be imposed on tax payable over 5 million Japanese yen (JPY)), and which will be effective sometime after 2025.",
    "On the international tax front, a key change is the introduction of the Income Inclusion Rule (IIR) as part of the OECD’s Global Minimum Tax (‘Pillar 2’). Effective for tax years beginning on or after 1 April 2024, the IIR will be applicable to Japanese headquartered multinational corporations, and to Japanese subsidiaries of foreign headquartered multinationals, where the worldwide gross revenue of the ultimate parent entity in two or more of the four fiscal years immediately preceding the fiscal year is 750 million euros (EUR) or more. Such corporations will be subject to the new Global Minimum Tax on the minimum taxable amount, and the new Global Minimum Local Corporate Tax on the resulting Global Minimum Corporate Tax amount, for each applicable fiscal year. A new reporting system for the IIR will also be introduced, as well as a Qualified Domestic Minimum Top-up Tax in the tax reform of 2024 or later.",
    "To cope with the increased compliance burden for corporate taxpayers as a result of the introduction of Pillar 2, the 30% trigger rate for ’paper companies‘ or ’cash box companies‘ under the controlled foreign corporation (CFC) rules will be lowered to 27% for tax years of the Japanese parent company beginning on or after 1 April 2024."
  ]}
  onPress={() => handleReadMore('2023 Tax Reform Act')}
  showMore={showMore['2023 Tax Reform Act']}
/>




<OptionBlock
  title="Consumption tax"
  description="A new Qualified Invoice System (QIS) was introduced as part of Japan’s 2016 Tax Reform, which will be effective from 1 October 2023. Under the QIS, a consumption taxpayer (a ‘taxpayer’ who files consumption tax returns and pays or receives a refund of consumption tax) can in principle only take an input tax credit if such taxpayer receives a ‘qualified invoice’ from a seller that is registered as both (i) a consumption taxpayer and (ii) a qualified issuer (QII). Effectively, the new system will require sellers to include their QII number in invoices so that the purchaser receiving such invoice will be able to take the input credit for the consumption tax included in the invoice. The requirement is similar to that of a seller to include its VAT number on an invoice in the European context."
  textData={["Businesses (other than exempt entities) will need to have filed an application with their tax office to become a QII no later than 30 September 2023 in order to be able to issue qualified invoices from 1 October 2023.  "]}
  onPress={() => handleReadMore('Consumption tax')}
  showMore={showMore['Consumption tax']}
/>






</OptionBlock>



<OptionBlock
  title="Taxes on corporate income"
  description="A domestic corporation in Japan is taxed on its worldwide income, including foreign branch income. However, 95% of dividends received by a domestic corporation from a foreign company in which it has held at least 25% (or lower, depending on the relevant tax treaty) of the outstanding shares of that foreign company for a continuous period of six months or more can be excluded from the company’s taxable income. See the description of Dividend income in the Income determination section for more information."
  textData={["A foreign corporation is taxed only on its Japan-source income. A foreign corporation with a permanent establishment (PE) in Japan is liable for corporate income taxes only on the income attributable to the PE."]}
  onPress={() => handleReadMore('Taxes on corporate income')}
  showMore={showMore['Taxes on corporate income']}
>




<OptionBlock
  title="Corporate tax"
  description="Corporate tax rates for fiscal years beginning on or after 1 April 2023 are provided in the table below."
  tableData={[
    { description: "Paid-in capital of over JPY 100 million", rate: "23.2" },
    { description: "Paid-in capital of JPY 100 million or less, except for a company wholly owned by a company that has paid-in capital of JPY 500 million or more:", rate: "" },
    { description: "First JPY 8 million per annum", rate: "15.0" },
    { description: "First JPY 8 million per annum if the annual average taxable income for the three fiscal years prior to the fiscal year in question exceeds JPY 1.5 billion", rate: "19.0" },
    { description: "Over JPY 8 million per annum", rate: "23.2" },
  ]}
  onPress={() => handleReadMore('Corporate tax')}
  showMore={showMore['Corporate tax']}
/>




<OptionBlock
  title="National local corporate tax"
  description="National local corporate tax for fiscal years beginning on or after 1 April 2023 is a fixed rate of 10.3% of the corporate tax liability."
  onPress={() => handleReadMore('National local corporate tax')}
  showMore={showMore['National local corporate tax']}
/>
<OptionBlock
  title="Enterprise tax (and special corporate business tax)"
  description="Enterprise tax is calculated in different ways depending on the capital base of the taxpayer. For small and medium-sized enterprises, enterprise tax is calculated based on the taxpayer’s income only. However, for large enterprises, the calculation will also refer to the taxpayer’s capital base and its 'value-added base' (which will include items such as personnel costs and rent). Therefore, loss-making large enterprises may still be liable to pay enterprise tax."
  textData={["The standard enterprise rates for fiscal years beginning on or after 1 April 2023 are shown in the table below. Rates for Tokyo, which applies a higher-than-standard rate are shown in parentheses. Note that special enterprise tax rates are applicable to corporations engaged in energy or gas supply and in insurance, which are not provided here.",
             "Special corporate business tax is a national tax but is collected through the enterprise tax return"]}
             tableData={[
              { base: "Value added base", lessThan100M: "-", moreThan100M: "1.26" },
              { base: "Capital base", lessThan100M: "-", moreThan100M: "0.525" },
              { base: "Income base: *", lessThan100M: "", moreThan100M: "" },
              { base: "First JPY 4 million", lessThan100M: "3.5 (3.75)", moreThan100M: "1.18", note: "(3.75)" },
              { base: "Next JPY 4 million", lessThan100M: "5.3 (5.665)", moreThan100M: "" },
              { base: "Over JPY 8 million **", lessThan100M: "7.0 (7.48)", moreThan100M: "" },
              { base: "Special local corporate tax (the rate is multiplied by the income base of enterprise tax)", lessThan100M: "37", moreThan100M: "260" },
            ]}
            textData1={["* Tax rates shown in parentheses for corporations with paid-in capital of JPY 100 million or less reflect a higher-than-standard tax rate, which will apply to where the corporation has annual income over JPY 25 million or annual revenue over JPY 200 million (notwithstanding the lower capital amount).",
                        "** If the paid-in capital of a corporation is less than JPY 100 million but at least JPY 10 million, and the corporation has places of business in more than two prefectures, the graduated rates are not applicable, and only the highest rate will be applied."]}
             onPress={() => handleReadMore('Enterprise tax')}
  showMore={showMore['Enterprise tax']}
/>


<OptionBlock
  title="Inhabitants' tax"
  description="Inhabitants’ tax is imposed on a corporation’s income allocated to each prefecture and city (or municipal borough). The allocation is generally made on the basis of the number of employees, in the same way as enterprise tax. Applicable rates for fiscal years beginning on or after 1 April 2023 are shown below."
  tableData={[
    { type: "Prefectural portion", standardRate: "1.0%", maximumRate: "2.0%" },
    { type: "Municipal portion", standardRate: "6.0%", maximumRate: "8.4%" },
  ]}
  textData1={["In addition to the above, inhabitants’ tax is imposed on a per capita basis, in the range from JPY 70,000 (in cases where the amount of paid-in capital is JPY 10 million or less and the number of employees in each prefecture and city is 50 or less) to JPY 3.8 million (in cases where the amount of paid-in capital is over JPY 5 billion and the number of employees in each prefecture and city is over 50). The actual inhabitants’ tax amount will be determined by each local government by the factors of paid-in capital and the number of employees."]}
      onPress={() => handleReadMore("Inhabitants' tax")}
  showMore={showMore["Inhabitants' tax"]}
/>





<OptionBlock
  title="Effective statutory tax rate"
  description="The total corporate income tax burden (i.e. effective tax rate) varies depending upon the size of a company’s paid-in capital. Since enterprise tax is deductible, the effective tax rate is less than the total of the statutory rates of national and local corporate tax, enterprise tax, and inhabitants’ tax."
  textData={["The following is the summary of the effective statutory tax rates in the case of corporations operating in Tokyo (without consideration of value-based and capital-based enterprise tax):"]}
  tableData={[
    { taxType: "Corporate tax", capitalLessThan100M: "23.2%", capitalExceeds100M: "23.2%" },
    { taxType: "Local corporate tax", capitalLessThan100M: "2.390% (23.2% x 10.3%)", capitalExceeds100M: "2.390% (23.2% x 10.3%)" },
    { taxType: "Enterprise tax", capitalLessThan100M: "7.48%", capitalExceeds100M: "1.18%" },
    { taxType: "Special corporate business tax", capitalLessThan100M: "2.59% (7.0% x 37%)", capitalExceeds100M: "2.600% (1.0% x 260%)" },
    { taxType: "Inhabitants’ tax", capitalLessThan100M: "2.413% (23.2% x 10.3%)", capitalExceeds100M: "2.413% (23.2% x 10.3%)" },
    { taxType: "Total", capitalLessThan100M: "38.073%", capitalExceeds100M: "31.783%" },
    { taxType: "Effective statutory tax rate *", capitalLessThan100M: "34.59%", capitalExceeds100M: "30.62%" },
  ]}
  textData1={["* Effective tax rate is calculated after deducting the enterprise tax and special corporate business tax."]}
  onPress={() => handleReadMore("Effective statutory tax rate")}
  showMore={showMore["Effective statutory tax rate"]}
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

export default JapanCorp;

