import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const JapanOv = () => {
  return (
    <ScrollView style={styles.container}>
      {/* China Overview */}
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Japan</Text>
       
          <Text style={styles.lastReviewed}>
            Last reviewed -23 January 2024
           </Text>
        <Text style={styles.details}>
        Japan, a nation in East Asia, is an archipelago of 6,852 islands in the Pacific Ocean.
         It is a constitutional monarchy, with Tokyo as its capital. The economy of Japan is the
          third largest in the world after the United States and the People's Republic of China.
         Japan's currency is the yen (JPY).
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
         <Text style={styles.cellText}>23.2</Text>
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
         <Text style={styles.cellText}>Within two months after the end of company's annual 
         accounting period.</Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Within two months after the end of company's annual
          accounting period</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Within two months after the end of the sixth month
          of the corporation's accounting period.</Text>
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
         <Text style={styles.cellText}>45, plus 2.1% surtax.</Text>
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
         <Text style={styles.cellText}>15 March</Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>	15 March</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>31 July and 30 November</Text>
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
         <Text style={styles.cellText}>Consumption tax: 10</Text>
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
         <Text style={styles.cellText}>Resident: 20 / 20 / 0;{'\n'} Non-resident: 15 / 20 / 20</Text>
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
         <Text style={styles.cellText}>Capital gains are subject to the normal CIT rate.</Text>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline individual capital gains tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>Gains arising from sale of stock are taxed at a total rate of 
         20.315% (15.315% for national tax purposes and 5% local tax).{'\n'}Gains arising from sale real
          property are taxed at a total rate of up to 39.63% (30.63% for national tax purposes and 9% 
          local tax) depending on various factors.</Text>
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
         <Text style={styles.cellText}>55</Text>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 10 }}>
         <Text style={styles.cellSubText}>Headline gift tax rate (%)</Text>
        </View>
         <Text style={styles.cellText}>55</Text>
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
        
        export default JapanOv;
