import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedbacks, resetData } from '../actions/FeedBackAction'
import Item from '../component/Item'
import Form from '../component/Form'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'


const Home = () => {
    const tw = useTailwind()
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const {feedback, feedbacks, fbSuccess, fbError, updateStatus, updateFeedback} = useSelector(state => state.FB)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    
    useEffect(() => {
        dispatch(getFeedbacks())
        dispatch(resetData)
    }, [])

    useEffect(() => {
      if(fbSuccess) {
        dispatch(getFeedbacks())
        dispatch(resetData)
      }
      
    }, [fbSuccess])



  return (
    <SafeAreaView style={[tw('flex-1 bg-sky-500 items-center justify-center pt-4')]}>
      <Text style={tw('text-white font-bold text-2xl text-2xl')}>Feedback</Text>
    <Form></Form>
    <KeyboardAvoidingView style={tw('flex-1')}>
      <TouchableWithoutFeedback style={tw('flex-1')} onPress={Keyboard.dismiss}>
        <ScrollView style={tw('flex-1')}>
          <View style={tw('px-6 my-2 flex-1')}>
   {feedbacks && feedbacks.length > 0 && (
        feedbacks.map((feed, index) => <Item key={index} feed={feed}></Item>)
    )}
          </View>
         </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
   
      
    </SafeAreaView>
  )
}

export default Home

