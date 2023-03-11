import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const data = [
    {
        name: 'Abbey Longton',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Abbot Jones',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Ab Tavin',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Adriana',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Alison Wilson',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Andrew Hart',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Anaya Zahid',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Ben Davies',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Bill Lomes',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Bob Dilvan',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Brian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Brie Templeton',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Bryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Cat fdd',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'C Dilvan',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Crian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Crie Templeton',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Cryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Dat fdd',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Drian Swift',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Drie Templeton',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Dryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Dat fdd',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Frian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Frie Templeton',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Fyan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Fat fdd',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Mrian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Mrie Templeton',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Mryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Mat fdd',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Orian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Orie Templeton',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Oryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Oat fdd',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Qrian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Qrie Templeton',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Qryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Qat fdd',
        phone_number: '+44786712987',
        invite: false
    },
    {
        name: 'Yrian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Yrie Templeton',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Yryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Yat fdd',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Zrian Swift',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Zrie Templeton',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Zryan smith',
        phone_number: '+44786712987',
        invite: true
    },
    {
        name: 'Zat fdd',
        phone_number: '+44786712987',
        invite: true
    },

]

const ContentListScreen = () => {

    const ITEM_HEIGHT = 50;

    var flag = "";

    const HeaderText = ({ text, index }) => {
        if (index == 0) {
            flag=text;
            return (
                <Text style={{ fontSize: 10, color: 'black' }}>{text}</Text>
            )
        }
        else if (text == flag) {
            return (
                <></>
            )
        }
        else {
            flag = text
            return (
                <Text style={{ fontSize: 10, color: 'black' }}>{text}</Text>
            )
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginTop: 8 }}>
                <HeaderText text={item.name[0]} index={index} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <View style={{ flex: 0.78, flexDirection: 'row', borderBottomWidth: 0.5, paddingVertical: 5 }}>
                        <Text style={{ flex: 0.4, fontSize: 9, color: 'black' }}>{item.name}</Text>
                        <Text style={{ flex: 0.6, fontSize: 9, color: 'grey', textAlign: "center" }}>{item.phone_number}</Text>
                    </View>
                    <Text style={{ flex: 0.2, fontSize: 12, marginTop: 5 }}>{item.invite ? 'ZIMA' : 'INVITE'}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }} >
            <Header />
            <View style={{ marginHorizontal: 30, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ flex: 0.2, fontSize: 10, color: 'black' }}>{data.length} contacts</Text>
                    <Text style={{ flex: 0.6, fontSize: 16, color: 'black', textAlign: 'center' }}>CONTACTS</Text>
                    <TouchableOpacity style={{ flex: 0.2, alignItems: 'flex-end' }}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../assets/images/user-edit.png')} />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', marginHorizontal: 30, marginVertical: 5, borderBottomWidth: 0.5, borderColor: '#b37700', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5, marginBottom: 20 }}>
                    <View style={{ flex: 0.2, marginLeft: 5 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#b37700', borderRadius: 50 }}></View>
                    </View>
                    <Text style={{ flex: 0.6, fontSize: 16, color: 'black', textAlign: 'left' }}>John Smith</Text>
                    <TouchableOpacity style={{ flex: 0.2, alignItems: 'flex-end' }}>
                        <Image style={{ width: 15, height: 15 }} source={require('../assets/images/black-add.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 30, marginHorizontal: 20, }}>
                <AlphaScrollFlatList
                    // keyExtractor={this.keyExtra  ctor.bind(this)}
                    style={{ height: 570 }}
                    data={data.sort((prev, next) => prev.name.localeCompare(next.name))}
                    renderItem={renderItem}
                    scrollKey={'name'}
                    reverse={false}
                    itemHeight={ITEM_HEIGHT}
                />
            </View>
            <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', marginHorizontal: 25, marginVertical: 5 }}>
                <TouchableOpacity style={{ flex: 0.3, justifyContent: 'center' }}>
                    <Image style={{ width: 15, height: 15 }} source={require('../assets/images/search-normal.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.2 }}>
                    <Image style={{ width: 35, height: 35 }} source={require('../assets/images/search-filter-icon-14.jpg')} />
                </TouchableOpacity >
                <TouchableOpacity style={{ flex: 0.25, alignItems: 'center' }}>
                    <MaterialIcons style={{ marginTop: 5 }} name='favorite' color={'red'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.25, alignItems: 'flex-end' }}>
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../assets/images/user-edit.png')} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default ContentListScreen

const styles = StyleSheet.create({});