import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const IndiaOv = () => {
  return (
    <ScrollView style={styles.container}>
      {/* India Overview */}
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>India</Text>
       
          <Text style={styles.lastReviewed}>
            Last reviewed -14 December 2023
           </Text>
        <Text style={styles.details}>
        India, a country in South East Asia, is the seventh-largest country by geographical area,
         the second-most populous country with over 1.25 billion people, and the most populous democracy
          in the world. It is bounded by the Indian Ocean to the south, the Arabian Sea to the southwest,
           and the Bay of Bengal to the southeast. It shares land borders with Pakistan to the west; Bhutan,
            the People's Republic of China, and Nepal to the northeast; and Bangladesh and Myanmar to the east.
             India is divided into 28 states and eight union territories, with New Delhi as the capital. 
             The official languages of India are Hindi and English, and the currency is the Indian rupee (INR).
        </Text>
        </View>
        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        India gained independence in 1947 and is developing into an open-market economy. Economic liberalisation,
         including reduced controls on foreign trade and investment, began in the early 1990s and has served to 
         accelerate the country's growth rate, estimated at 7% in tax year 2022/23 (tax year begins on 1 April 
         and ends on 31 March of the following year; note that, in India, 'tax year' is referred to as 'financial
          year' and the year following a 'tax year' is referred to as 'assessment year').
        </Text>
        </View>

        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        Over the seven decades since independence, the country has achieved self-sufficiency in terms of food and
         grains. India is now a net exporter of food. Life expectancy has more than doubled, literacy rates have 
         quadrupled, health conditions have improved, and a sizeable middle class has emerged. India is now home 
         to globally recognised companies in pharmaceuticals, automobiles, steel, and information and space technologies.
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
         <Text style={styles.cellText}>Domestic companies:
                                        {'\n'} 1. 25% or 30% (plus applicable surcharge and cess) depending on turnover.
                                        {'\n'} 2. 15% or 22% (plus applicable surcharge and cess) subject to certain conditions.
                                        {'\n'} Foreign companies (having PE in India): 40% (plus applicable surcharge and cess)
                                        {'\n'} Please refer to the Taxes on corporate income section for effective tax rates
                                         for different classes of companies.</Text>
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
         <Text style={styles.cellText}>31 October of succeeding tax year.
         {'\n'}30 November of succeeding tax year if the corporation has international transactions
          with associate affiliates/specified domestic transactions.</Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Before submission of return of income.</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Estimated tax is due in quarterly instalments payable before the 
         15th day of each quarter of tax year (i.e. 15 June [15%], 15 September [45%], 15 December [75%],
          15 March [100%]).</Text>
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
         <Text style={styles.cellText}>New personal tax regime: 39.00 (i.e. 30% + 25% surcharge + 4% health and education cess);
        {'\n'}Old tax regime: 42.744 (i.e. 30% + 37% surcharge + 4% health and education cess)</Text>
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
         31 July of the succeeding tax year.
            {'\n'}31 October of succeeding tax year if accounts are required to be audited under income tax law or under any 
            other law for the time being in force.
            {'\n'}30 November of succeeding tax year if there are international transactions with associate affiliates/specified 
            domestic transactions
         </Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>	Before submission of return of income</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Estimated tax needed to be paid is due in quarterly instalments payable before 15th day 
         of each quarter of tax year (i.e. 15 June [15%], 15 September [45%], 15 December [75%], 15 March [100%]).</Text>
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
         The rate of GST varies from 5% to 28% depending upon the category of goods and services being supplied,
          the general rate of tax being 18% on majority of goods and services. 
         {'\n'}Additionally, for certain goods, a compensation cess is levied at different rates as prescribed by
          the government.
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
              Resident: 10 / 10 / 2 to 10 / 2 to 10 for fees for technical services;
              {'\n'}Non-resident*: 20 / 5 to 40 / 20 / 20 for fees for technical services
              {'\n'}(For non-residents, the above are to be enhanced by applicable surcharge and health and education cess)
              {'\n'}*Subject to the rates provided under Double Taxation Avoidance Agreement.
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
         <Text style={styles.cellText}>
         10%/20% (applicable surcharge and cess) long-term and 15%/40% (applicable surcharge and cess) short-term (may be exempt under Double Taxation Avoidance Agreement).
         {'\n'}Please refer to Capital gains in the Income determination section for more details
         </Text>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline individual capital gains tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>
         Long-term capital gain: 10 (on sale of equity shares/ units of equity oriented funds/units of business trust in excess of INR 100,000 and security transaction tax is paid). 10 for non-residents without cost inflation adjustment or 20 for residents/ non-residents with cost inflation adjustment (on sale of any other asset).
         {'\n'}Short-term capital gain: 15 (if securities transaction tax paid on sale of equity shares/ units of equity oriented funds/ units of business trust) or normal slab rates (on sale of any other asset).
         </Text>
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
         <Text style={styles.cellText}>NA</Text>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline gift tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>Taxable in the hands of recipient and subject to tax at normal slab rates.</Text>
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
        
        export default IndiaOv;