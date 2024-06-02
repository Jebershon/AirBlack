import { Text, View,Image,TextInput, Button,StyleSheet,TouchableOpacity,ScrollView,ImageBackground} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
export default function Index() {
  const [selectedValue1, setSelectedValue1] = useState("Choose the most relevant Option");
  const [selectedValue2, setSelectedValue2] = useState("Choose the most relevant Option");
  const [selectedValue3, setSelectedValue3] = useState("Choose the most relevant Option");
  const [background, setBackground] = useState(require('../assets/images/bg-people.jpg'));
  const [upper ,setUpper] = useState(require('../assets/images/upper.png'));
  const [img1 ,setImg1] = useState(require('../assets/images/star.png'));
  const [img2 ,setImg2] = useState(require('../assets/images/gang.png'));
  const [img3 ,setImg3] = useState(require('../assets/images/video.png'));
  
  return (
    <ImageBackground 
    source={background} 
    style={styles.backgroundImage}>
    <View>
    <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Image source={upper} style={styles.upperCard}></Image>
        </View>
      <View style={styles.form}>
      <Text  style={styles.heading}>Fill the form below to enquire</Text>

        <View>
        <Text style={styles.label}>*Enter your Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#888"
          placeholder="Eg. Aneesha Metra"
        />
        </View>
        
        <View>
        <Text style={styles.label}>*Enter your WhatsApp Number:</Text>
        <View style={styles.ph}>
        <View style={styles.phContainer}>
          <Picker style={styles.php}>
            <Picker.Item label="91+" value="91+" />
            <Picker.Item label="90+" value="90+" />
          </Picker>
        </View>
        <TextInput
          placeholderTextColor="#888"
          placeholder="0000"
          secureTextEntry={true}
          style={styles.pht}
        />
        </View>
        </View>

        <View>
        <Text style={styles.label}>*Select your profession:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue1}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
            placeholder="Choose the most relevant Option"
          >
            <Picker.Item label="Choose the most relevant Option"/>
            <Picker.Item label="Engineer" value="Engineer" />
            <Picker.Item label="Teacher" value="Teacher" />
          </Picker>
        </View>
        </View>

        <View>
        <Text style={styles.label}>*Select your Goal:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue2}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
            placeholder="Choose the most relevant Option"
          >
            <Picker.Item label="Choose the most relevant Option"/>
            <Picker.Item label="Beauty" value="Beauty" />
            <Picker.Item label="Fit" value="Fit" />
          </Picker>
        </View>
        </View>

        <View>
        <Text style={styles.label}>*Select your city:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue3}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
            placeholder="Choose the most relevant Option"
          >
            <Picker.Item label="Choose the most relevant Option"/>
            <Picker.Item label="Chennai" value="Chennai" />
            <Picker.Item label="Gurgaon" value="Gurgaon" />
            <Picker.Item label="Bangalore" value="Bangalore" />
          </Picker>
        </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card1}>
        <Text>Why should you join AIRBLACK</Text>
        <View style={styles.flex}>
        <Image source={img1} style={{width:90,height:80,marginTop:10}}></Image>
        <Image source={img2} style={{width:90,height:90}}></Image>
        <Image source={img3} style={{width:90,height:90}}></Image>
        </View>
      </View>
      <View  style={styles.card2}>
        
      </View>
      <View  style={styles.card3}>
        
      </View>
    </ScrollView>
    </View>
    </ImageBackground>
  );
}
// rgba(1, 0, 0, 0.5)
const styles = StyleSheet.create({
  upperCard:{
    width:430,
    height:250,
  },
  form:{
    borderColor:'gray',
    padding:20,
    backgroundColor:'black',
    margin:7,
  },
  card1:{

  },
  card2:{

  },
  card3:{

  },
  flex:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  scrollView: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
 container: {
  flex: 1,
  justifyContent: 'center',
},
input:{
  height: 50,
  padding: 12,
  margin:5,
  width: '100%',
  borderColor: 'gray',
  borderWidth: 1,
  color:'gray',
},
heading:{
  fontSize:24,
  color:'white',
},
button: {
  backgroundColor: '#f56563',
  height: 50,
  width: 400,
  marginTop:10,
  padding:12,
  borderRadius: 3,
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  textAlign: 'center',
},
ph:{
 display:'flex',
 flexDirection:'row',
 justifyContent:'space-between',
},
pht:{
  height: 50,
  margin:5,
  padding:12,
  width:'70%',
  borderColor: 'gray',
  borderWidth: 1,
  color:'white',
  backgroundColor:'black'
},
php:{
  height: 50,
  borderColor: 'gray',
  borderWidth: 1,
  color:'white',
  backgroundColor:'black'
},
phContainer:{
  width:"30%",
  borderWidth: 1,
  borderColor: 'gray',
  overflow: 'hidden',
},
drop: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'gray',
  borderWidth: 1,
},
label: {
  fontSize: 18,
  margin: 15,
  color:'white',
},
picker: {
  height: 50,
  margin:5,
  width:'100%',
  borderColor: 'gray',
  borderWidth: 1,
  color:'white',
  backgroundColor:'black'
}, 
pickerContainer: {
  borderWidth: 1,
  borderColor: 'gray',
  overflow: 'hidden',
},
backgroundImage: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  alignItems: 'center',
},
overlay: {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 20,
  borderRadius: 10,
},
text: {
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
},
});