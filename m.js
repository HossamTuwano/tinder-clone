<View style={tw`flex-1 items-center pt-1`}>
<Image
  style={tw`w-full h-20`}
  resizeMode="contain"
  source={{
    uri: "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png",
  }}
/>
<Text style={tw`text-xl text-gray-500 font-bold p-2`}>
  Welcome {user}
</Text>

<Text style={tw`text-center text-red-400 font-bold p-4`}>
  Step 1: The Profile Pic
</Text>

<TextInput
  value={image}
  onChangeText={setImage}
  style={tw`text-center text-xl pb-2`}
/>

<Text style={tw`text-center text-red-400 font-bold p-4`}>
  Step 2: The Job
</Text>

<TextInput
  value={job}
  onChangeText={setJob}
  placeholder="Enter your occupation"
  style={tw`text-center  pb-2`}
/>

<Text style={tw`text-center text-red-400 font-bold p-4`}>
  Step 3: The Age
</Text>

<TextInput
  value={age}
  onChangeText={setAge}
  placeholder="Enter your age"
  style={tw`text-center text-xl pb-2`}
  maxLength={2}
  keyboardType="numeric"
/>

<TouchableOpacity
  disabled={incompleteForm}
  style={[tw`w-64 p-3 rounded-xl absolute bottom-0 bottom-10`]}
  //   style={[tw`w-64 p-3 rounded-xl absolute bottom-0 bottom-10`, {incompleteForm ? tw`bg-gray-400` : tw`bg-red-400`}]} this erros
  onPress={updateUserProfile}
>
  <Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
</TouchableOpacity>
</View>