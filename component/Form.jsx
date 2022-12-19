import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTailwind } from 'tailwind-rn/dist'
import { Button, Card } from '@rneui/base'
import { TextInput } from 'react-native'
import { Input } from '@rneui/themed';
import { Select } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createFeedback, getFeedbacks, resetData, updateFeedbackFunction } from '../actions/FeedBackAction'
import { Alert } from 'react-native'


const Form = () => {
    const {feedback, feedbacks, fbSuccess, fbError, updateStatus, updateFeedback} = useSelector(state => state.FB)
    const dispatch = useDispatch()
    const [text1, setText1] = useState(null)
    const [rating, setRating] = useState(0)
    const tw = useTailwind()
    const [idUpdate, setIdUpdate] = useState(null)

    const submit = () => {
        if(rating != 0 || text1 != null) {
            if(!updateStatus) {

                dispatch(createFeedback({text: text1, rating: rating}))
            } else if(updateStatus) {
                dispatch(updateFeedbackFunction(idUpdate, {id: idUpdate, text: text1, rating: rating}))
            }
            dispatch(getFeedbacks())
            setText1(null)
            setRating(0)
            dispatch(resetData())
        } else {
            Alert.alert("please type something")
        }
        
    }
    const cancelUpdate = () => {
        dispatch(resetData())
    }
    useEffect(() => {
        if(updateStatus) {
            setRating(updateFeedback.rating)
            setText1(updateFeedback.text)
            setIdUpdate(updateFeedback.id)

        }
    }, [updateStatus])

   return (
   
       <View style={tw('px-8 w-full mb-4')}>
         <Card containerStyle={tw('rounded-lg w-full bg-white items-center justify-center mx-auto')}>
            <Text style={tw('font-bold text-lg mb-2')}>How would you rate our service</Text>
            <TextInput value={text1}  style={[tw(' py-2 px-4 rounded-full text-base text-zinc-800 bg-gray-200 py-2')]} onChangeText={text => setText1(text)}></TextInput>
            <View style={tw('mt-4')}>
               
            <Select  selectedValue={rating} minWidth="200" accessibilityLabel='Rate service' placeholder='Rate service' _selectedItem={{
                bg: "gray",
                marginTop: 100,
                endIcon: <AntDesign name="arrowdown" size={18} style={tw('text-zinc-600')} />
            }} onValueChange={ratingvalue => setRating(ratingvalue)}>
                <Select.Item label="1" value="1"></Select.Item>
                <Select.Item label="2" value="2"></Select.Item>
                <Select.Item label="3" value="3"></Select.Item>
                <Select.Item label="4" value="4"></Select.Item>
                <Select.Item label="5" value="5"></Select.Item>
            </Select>
          
            </View>
            <Button title={updateStatus ? "update" : "submit"} onPress={submit} containerStyle={tw('py-2 px-4 mt-4 bg-blue-500 text-white font-bold rounded-2xl')}></Button>
            {updateStatus && <Button title="cancel" onPress={cancelUpdate} containerStyle={tw('py-2 px-4 mt-4 bg-blue-500 text-white font-bold rounded-2xl')}></Button>}
        </Card>
       </View>
      
   
  )
}

export default Form

const styles = StyleSheet.create({})