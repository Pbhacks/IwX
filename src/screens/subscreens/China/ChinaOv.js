import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ChinaOv = () => {
  return (
    <ScrollView style={styles.container}>
      {/* China Overview */}
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>People's Republic of China</Text>
       
          <Text style={styles.lastReviewed}>
            Last reviewed - 15 January 2024
           </Text>
        <Text style={styles.details}>
        The People's Republic of China, commonly known as China, is one of the most populous countries in the world,
         with over 1.3 billion people. Located in East Asia along the coastline of the Pacific Ocean, China is one of
          the largest countries in the world by land area. The capital of China is Beijing, and the official language 
          is Mandarin Chinese.
        </Text>
        </View>
        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        The official currency of China is the renminbi (yuan) (CNY), and it is held in a floating exchange-rate system.
         It used to be managed primarily against the United States dollar (USD). Since 2005, the renminbi has been referenced
          to a basket of foreign currencies. On 1 October 2016, the renminbi was added into the International Monetary Fund’s (IMF’s) 
          Special Drawing Rights (SDR) basket.
        </Text>
        </View>

        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        For centuries, China stood as a leading civilisation, outpacing the rest of the world in technology, arts, and sciences.
         After World War II, the Communists, under Mao Zedong, established a socialist system. After 1978, Mao's successor, Deng Xiaoping, 
         and other leaders focused on market-oriented economic development, and China began to generate significant and steady growth in investment,
          consumption, and standards of living.
        </Text>
        </View>
        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        Since then, China has generally implemented reforms in a gradual fashion. As its role in world trade has steadily grown,
         its importance to the international economy has also increased apace. China is also the largest trading nation in the
          world and the largest exporter and second largest importer of goods. A milestone was achieved in mid-2010 when China's
           economy was valued at USD 1.33 trillion and became the world's second largest economy, surpassing Japan and second only
            to that of the United States. 
        </Text>
        </View>

        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        China's growth comes from both huge state investments in infrastructure and heavy industries as well as private
         sector expansion in light industries.
        </Text>
        </View>
        <View style={styles.overviewContainer}>  
        <Text style={styles.details}>
        Exports had been China's major economic driver, but since the 2008 global financial crisis, which seriously affected
         the international markets of China export products, the Chinese government shifted the focus to stimulate investment
          and consumption in domestic markets.
        </Text>
        </View>

       
    


{/* <View style={styles.header}>
      <Text style={styles.headerText}>Quick rates and dates</Text>
    </View> */}
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
         <Text style={styles.cellText}>25</Text>
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
         <Text style={styles.cellText}>For annual CIT filing, within five months following the end of the tax year.</Text>
         <Text style={styles.cellText}>For monthly or quarterly provisional CIT filing, within 15 days following the end of each month/quarter.</Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Within five months following the end of the tax year.</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>CIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>Quarterly or monthly instalment to be paid within 
          15 days following the end of each month/quarter.</Text>
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
         <Text style={styles.cellText}>Resident: Between 1 March and 30 June for annual reconciliation return on comprehensive income. 
                                        15th day of the month following the month when other income was received.</Text>
         <Text style={styles.cellText}>Non-resident: 15th day of the month following the month when income was received.</Text>
        </View>


        
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT final payment due date</Text>
        </View>
        <View >
         <Text style={styles.cellText}>	Same as the due date for PIT return.</Text>
        </View>
      
    
        </View>
        <View style={[styles.row, { flexDirection: 'row' }]}>
        <View >
         <Text style={styles.cellSubText}>PIT estimated payment due dates</Text>
        </View>
        <View >
         <Text style={styles.cellText}>15th day of the month following the month when the income was received.</Text>
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
         <Text style={styles.cellText}>13, 9, or 6 depending on the types of goods and services</Text>
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
         <Text style={styles.cellText}>Resident: NA; {'\n'} Non-resident: 10 / 10 / 10</Text>
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
         <Text style={styles.cellText}>20</Text>
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
         <Text style={styles.cellText}>NA</Text>
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
        All information in this chart is up to date as of the 'Last reviewed' date on the corresponding territory Overview page. This chart has been prepared for general guidance on matters of interest only, and does not constitute professional advice. You should not act upon the information contained in this chart without obtaining specific professional advice. No representation or warranty (express or implied) is given as to the accuracy or completeness of the information contained in this chart, and, to the extent permitted by law, PwC does not accept or assume any liability, responsibility or duty of care for any consequences of you or anyone else acting,
         or refraining to act, in reliance on the information contained in this chart or for any decision based on it.</Text>
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
        
        export default ChinaOv;
