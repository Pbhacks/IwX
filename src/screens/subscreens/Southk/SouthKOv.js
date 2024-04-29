import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SouthKOv = () => {
  return (
    <ScrollView style={styles.container}>
      {/* India Overview */}
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Korea, Republic of</Text>
       
          <Text style={styles.lastReviewed}>
            Last reviewed -27 February 2024
           </Text>
        <Text style={styles.details}>
        Located between China and Japan, Korea is the centre of aviation and maritime logistics connecting the Asia-Pacific
         region, as well as Eurasia and the Americas. The Republic of Korea (South Korea or Korea) is divided into nine provinces,
          with Seoul as the capital. The official language of South Korea is Korean, and the currency is the won (KRW).
        </Text>
        </View>
        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        Since the 1960s, South Korea has achieved an incredible record of growth and global integration to become a high-tech
         industrialised economy. In 2006, South Korea joined the trillion-dollar club of world economies. In 2022, Korea was the
          13th largest economy in the world by the nominal gross domestic product (GDP) according to the World Bank. Korea’s economic 
          fundamentals are solid, with its trade volume ranked ninth in the world as of 2020. Initially, a system of close government and
           business ties, including directed credit and import restrictions, made this success possible. The government promoted the import
            of raw materials and technology at the expense of consumer goods and encouraged savings and investment over consumption. Korea
             adopted numerous economic reforms following the global crisis, including greater openness to foreign investment and imports.
        </Text>
        </View>

        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        More recently, the Korean government’s policy has focused on expanding investment and strengthening digital infrastructure in the
         country through its Digital New Deal policy. According to the World Economic Forum (WEF), the dissemination of information and
          communication technologies (ICT) in Korea has ranked first in the world. Korea succeeded in commercialising the world’s first
           5G network (April 2019), proving that the country is a global leader in the ICT field.  During 2021, the Korean economy recorded 
           a growth rate of 4.1%.  The growth rate declined to 2.6% in 2022 and is estimated to further decline to 1.4% in 2023.  South Korea’s
            per capita gross national income was 29.7 times the level of North Korea in 2022.
        </Text>
        </View>
         

  <ScrollView horizontal={true}>
    <View style={styles.table}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Quick rates and dates</Text>
    </View>

    <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Corporate income tax (CIT) rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline CIT rate (%)</Text>
        </View>
         <Text style={styles.cellText}>24</Text>
      </View>
      </View>

  <View style={styles.table}>
    <View style={styles.row}>
                <Text style={styles.subHeading}>Corporate income tax (CIT) due dates</Text>
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT return due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Interim tax return: within two months from the end of the interim six-month period;
         {'\n'}Annual tax return: within three months from the end of the fiscal year.</Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Along with the filing of the returns (payment in instalments is allowed in case of election).</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>NA</Text>
        </View>


       
    </View>
  </View>



  <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Personal income tax (PIT) rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline PIT rate (%)</Text>
        </View>
         <Text style={styles.cellText}>45</Text>
      </View>
      </View>
 



      <View style={styles.table}>
    <View style={styles.row}>
                <Text style={styles.subHeading}>Personal income tax (PIT) due dates</Text>
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT return due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>
         31 May
         </Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>31 May (payment in instalments is allowed in case of election)</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>NA</Text>
        </View>


       
    </View>
  </View>




  <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Value-added tax (VAT) rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Standard VAT rate (%)</Text>
        </View>
         <Text style={styles.cellText}>
         10
         </Text>
      </View>
      </View>





      <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Withholding tax (WHT) rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>WHT rates (%) {'\n'}(Dividends/Interest/Royalties)</Text>
        </View>
         <Text style={styles.cellText}>
         Resident corporation (individual): 0 (14% for individual, 14% for distribution of profit from securities investment trusts to corporation) / 14 (14% for individual, 25% for interest from a non-commercial loan) / 0;
              {'\n'}Non-resident: 20 / 20 (14% for interest derived from bonds issued by domestic corp.'s, etc., 0 for government bonds, etc.) / 20
         </Text>
      </View>
      </View>




      <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Capital gains tax (CGT) rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline corporate capital gains tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>24 (same as the normal CIT rates).</Text>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline individual capital gains tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>
         45 for registered business-purpose real property held for two years or more (varying depending on the type of asset, holding period, etc.). </Text>
      </View>
      </View>

   
      <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Inheritance and gift tax rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline inheritance tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>50</Text>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline gift tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>50</Text>
      </View>
      </View>

      <View style={styles.table}>
      <View style={styles.row}>
         <Text style={styles.subHeading}>Net wealth/worth tax rates</Text>
    </View>
        <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Net wealth/worth tax rates</Text>
        </View>
         <Text style={styles.cellText}>NA</Text>
      </View>
      </View>
         

      <Text style={styles.lastReviewed}>
      NA stands for Not Applicable (i.e. the territory does not have the indicated tax or requirement)
      {'\n'}NP stands for Not Provided (i.e. the information is not currently provided in this chart)
           </Text>








  </View> 
  </ScrollView>


  <View style={styles.overviewContainer}>  
        <Text style={[styles.details,{fontSize:12}]}>
        All information in this chart is up to date as of the 'Last reviewed' date on the corresponding territory Overview page. 
        This chart has been prepared for general guidance on matters of interest only, and does not constitute professional advice.
         You should not act upon the information contained in this chart without obtaining specific professional advice.
          No representation or warranty (express or implied) is given as to the accuracy or completeness of the information contained
           in this chart, and, to the extent permitted by law, Iwx does not accept or assume any liability, responsibility or duty of 
           care for any consequences of you or anyone else acting, or refraining to act, in reliance on the information contained in 
           this chart or for any decision based on it.</Text>
        </View>


            </ScrollView>
          );
        };
        
        
        const styles = StyleSheet.create({
        
          container: {
            flex: 1,
            padding: 20, // Increase padding to 20
            marginTop: 35, // Add marginTop of 20
            },
          header: {
            backgroundColor: '#800080',
            padding: 20, // Increase padding to 20
            borderRadius: 15, // Add border radius of 10
            
          },
          headerText: {
            color: '#FFFFFF',
            fontSize: 24, // Increase font size to 24
            fontWeight: 'bold', // Make the text bold
            textAlign: 'justify', // Center the text
          
          },
          table: {
            margin: 20, // Increase margin to 20
            padding: 20, // Increase padding to 20
            borderWidth: 1,
            borderColor: '#800080',
            borderRadius: 10, // Add border radius of 10
            alignItems: 'left', // Center the component
           
          },
          row: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#800080',
            padding: 10, // Increase padding to 10
          },
          subHeading: {
            flexDirection: 'row',
            textAlign: 'justify',
            fontSize: 18, // Increase font size
            width:'100%',
            padding: 10, // Increase padding to 10
            backgroundColor: 'rgba(128, 0, 128, 0.2)',
            borderRadius: 10, // Add this line
            fontWeight: '700', // Make the text bold
          },
          cell: {
            flex: 1,
            padding: 10, // Increase padding to 10
          },
          cellSubText: {
            textAlign: "left",
            paddingRight: 75, // Add this line
            color: '#800080',
            fontSize: 16, // Increase font size to 18
            marginRight: 0, // Add this line
            width:200,
            fontWeight: '500', // Make the text bold
          },
          cellText: {
            textAlign: "justify",
            paddingRight: 75, // Add this line
            fontSize: 18, // Increase font size to 18
            marginRight: 0, // Add this line
            width:400,
          },
        
          overviewContainer: {
            marginBottom: 20,
          },
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#3F51B5',
            marginBottom: 10,
            textAlign: 'center', // Center the text
          },
          overview: {
            fontSize: 16,
            marginBottom: 10,
            color: '#616161',
          },
          lastReviewed: {
            fontSize: 12,
            color: '#616161',
          },
          details: {
            fontSize: 16,
            color: '#333',
            textAlign: 'justify', // Center the text
          },
          
          subTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#3F51B5',
            marginBottom: 10,
            textAlign: 'center', // Center the text
          },
         
         
          ItemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          },
          Item: {
            width: '48%',
            marginBottom: 10,
          },
          taxRateLabel: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#3F51B5',
            marginBottom: 5,
          },
          taxRateValue: {
            fontSize: 14,
            color: '#333',
          },
          pwcContainer: {
            marginBottom: 20,
          },
          pwcTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#3F51B5',
            marginBottom: 10,
          },
          pwcDetails: {
            fontSize: 16,
            color: '#333',
            textAlign: 'center', // Center the text

          },
        });
        
        export default SouthKOv;