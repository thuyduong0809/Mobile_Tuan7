import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Screen2({navigation,route}){
    const [toDo, setToDo] = useState([]);
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(0);
    const { email } = route.params;
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://65473b94902874dff3ac0e68.mockapi.io/api/ToDo")
            .then(response => response.json())
            .then(data => {
                const username1Data = data.find(item => item.name === email);
                setToDo(username1Data.text);
                setData(username1Data);
                if (username1Data) {
                    const textArray = username1Data.text;
                    console.log(textArray);
                    update = 0;
                } else {
                    console.log("Không tìm thấy dữ liệu cho 'username1'");
                }
            })
            .catch(error => {
                console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
            });
    }, [route.params.update]);

    useEffect(() => {
        if (search === "") {
            setToDo(toDo)
        } else {
            const filtered = toDo.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
            setToDo(filtered);
        }
    }, [search]);


    console.log(toDo)
    
    return(
        <View style={styles.container}>
            <View style ={{flexDirection:"row",alignItems:"center",width:"100%",marginHorizontal:15,justifyContent:"space-between"}}>
                <Pressable onPress={()=>{navigation.navigate("Screen1")}}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>

                <View style={{marginLeft:"30%",flexDirection:"row",alignItems:"center"}}>
                    <Image  style={{width:51,height:50}} resizeMode="contain" source={require("../assets/avt.png")}/>
                </View>
                <View style={{marginLeft:3}}>
                    <Text style={{fontWeight:"bold", fontSize:18,textAlign:"center"}}>Hi {email}</Text>
                    <Text style={{fontWeight:"400", fontSize:15}}>Have a agrete day a head </Text>
                </View>
            </View>

            <View style={{marginTop:50,width:'95%',height:45,borderColor:"#111",borderWidth:1,borderRadius:8,flexDirection:"row",alignItems:"center"}}>
            <AntDesign style={{ marginLeft: 10 }} name="search1" size={24} color="black" />
            <TextInput 
            placeholder="Search" 
            value={search}
            onChangeText={text=> setSearch(text)}
            style={{fontSize:15,height:100,width:"80%",marginLeft:15}}/>
            </View>

            <View>
                {toDo.map((item,index)=>(
                    <Pressable onPress={()=>{navigation.navigate("Screen3",{email,data}); }} style={{backgroundColor: "#e4e8ea", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginTop: 20, flexDirection: "row", width: 300, justifyContent: "space-between", height: 50, alignItems: "center" }}>
                        <AntDesign name="checksquareo" size={24} color="#4faa71" />
                        <Text style={{fontSize:17}}>{item}</Text>
                        <FontAwesome name="pencil" size={24} color="#de7d80" />

                    </Pressable>

                ))}
            </View>
            <Pressable onPress={() => { navigation.navigate("Screen3", { email, data, update }) }} style={{marginTop: 15, backgroundColor: "#24c3d9", width: 60, height: 60, borderRadius: 50, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                    <Entypo name="plus" size={40} color="#fff" />
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        //justifyContent:"center",
        backgroundColor:"#f5f5f5",
        margin:10
    },
})