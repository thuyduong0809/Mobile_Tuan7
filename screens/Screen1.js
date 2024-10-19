import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";


export default function Screen1({navigation}){
    const [email,setEmail] = useState("Mark");
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{width:360,height:300}} resizeMode="contain" source={require('../assets/image.png')}/>
                <Text style={{fontSize:25,fontWeight:"bold", textAlign:"center", color:"purple",}}>MANAGE YOUR {'\n'}TASK</Text>
            </View>

            <View style={{flexDirection:"row",
            
            borderColor:"#111",
            alignItems:"center",
            borderWidth:1,
            borderRadius:9,
            width:"85%",
            height:45}}>
                <AntDesign name="mail" size={24} color="black" />
                <TextInput
                style={{fontSize:19,marginLeft:10,}} 
                value={email} 
                onChangeText={setEmail} 
                placeholder="Enter Your Name"/>
            </View>

            <Pressable onPress={()=>{navigation.navigate("Screen2",{email})}} style={styles.submit}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>GET STARTED</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        //justifyContent:"center",
        backgroundColor:"#f5f5f5"
    },
    image:{
        width:"95%",
        height:350,
        margin:50,
        justifyContent:"center",
        alignItems:"center",
    
    },
    submit:{
        width:"50%",
        height:50,
        margin:85,
        backgroundColor:"#00BDD6",
        borderRadius:13,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
})