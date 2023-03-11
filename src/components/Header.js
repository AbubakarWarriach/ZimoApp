import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = () => {
    return (
        <View style={{ justifyContent: 'space-around',marginHorizontal:10, backgroundColor: 'white',borderBottomWidth:0.5,height:40,borderColor:'#b37700' }}>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <View style={{ flexDirection: 'row',marginHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ flex: 0.2 }}>
                    <Image style={{width:17,height:17,marginLeft:5}} source={require('../assets/images/arrow-left.png')} />
                </TouchableOpacity>
                <Text style={{ flex: 0.6, fontSize: 20, textAlign: 'center', }}>ZIMA</Text>
                <TouchableOpacity style={{ flex: 0.2, alignItems:'flex-end' }}>
                    <Image style={{width:20,height:20}} source={require('../assets/images/shopping_bag.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header