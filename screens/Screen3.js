import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Screen3({navigation,route}){
    const { email, item, data, update } = route.params;
    console.log(item)
    const [toDoNew, setToDoNew] = useState(item ? item : '');

    function addTextToUserById(userId, newText) {
        fetch(`https://65473b94902874dff3ac0e68.mockapi.io/api/ToDo/${userId}`, {
            method: "PUT", 
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: [...data.text,newText],
        }),
        })
        .then(response => response.json())
        .then(updatedData => {
            console.log("Dữ liệu đã được cập nhật:", updatedData);
            update=1;
        })
        .catch(error => {
            console.error("Đã xảy ra lỗi khi cập nhật dữ liệu:", error);
        });
        }      
        const handleHome = () => {
        navigation.navigate("Home", {email, data, update})
    }
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingHorizontal:15,width:"95%"}}>
                <View style={{marginLeft:11,flexDirection:"row",alignItems:"center"}}>
                    <Image resizeMode="contain" source={require("../assets/avt.png")} style={{width:50,height:70}}/>
                        <View style={{marginRight:90}}>
                            <Text style={{fontSize:17,fontWeight:"bold",marginLeft:10}}>Hi {email}</Text>
                            <Text style={{fontSize:17, fontWeight:"400"}}>Have a agrete day a head</Text>
                        </View>
                </View>
                <Pressable onPress={()=>{navigation.navigate("Screen2",{email}) }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
            </View>
            <View style={{marginTop:38}}>
                <Text style={{fontSize:35,fontWeight:"bold"}}>{item ? "EDIT TO JOB" : "ADD TO JOB"}</Text>
            </View>

            <View style={{width:"95%",height:55,borderRadius:3,borderWidth:1,flexDirection:"row",alignItems:"center",margin:30}}>
                <MaterialCommunityIcons name="note-text-outline" size={24} color="green" />
                <TextInput style={{marginLeft:15,width:"80%",height:"80%",fontSize:18}} value={toDoNew} onChangeText={setToDoNew} placeholder="Input Your Job"/>
            </View>
            
            <Pressable  style={{marginTop:20,width:"50%",height:45,backgroundColor:"#00bdd5",borderRadius:10,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>FINISH</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>

            <Pressable onPress={()=>{navigation.navigate("Screen1", {email, data, update})}} style={{ marginTop: 20, width: 100, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>HOME SCREEN</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </Pressable>

            <Image style ={{width:"75%",height:"38%"}} resizeMode="contain" source={require("../assets/image.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#f5f5f5"
    },
    
})