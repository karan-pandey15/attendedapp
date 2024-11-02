// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, Modal, ScrollView, Button, Platform, StyleSheet } from 'react-native';
// import Header from '../components/Header';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const EventCrewsScreen = () => {
//   const [selectedGender, setSelectedGender] = useState(''); // Gender selection
//   const [eventType, setEventType] = useState(''); // Corporate or Brand Promotion
//   const [locationType, setLocationType] = useState(''); // Local or Out of Station
//   const [ageRange, setAgeRange] = useState(''); // Age range selection

//   const [bottomModalVisible, setBottomModalVisible] = useState(false); // Modal visibility for filters
//   const [dateModalVisible, setDateModalVisible] = useState(false); // Modal visibility for date picker

//   const [selectedDate, setSelectedDate] = useState(null); // Date selection
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // Date picker visibility

//   const showBottomModal = () => setBottomModalVisible(true);
//   const closeBottomModal = () => setBottomModalVisible(false);
//   const showDateModal = () => setDateModalVisible(true);
//   const closeDateModal = () => setDateModalVisible(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   const onRequestCrews = () => {
//     if (!selectedGender || !eventType || !locationType || !ageRange) {
//       Alert.alert('Error', 'Please select all the options');
//     } else {
//       // Proceed to next step: show date and time picker modal
//       closeBottomModal();
//       showDateModal();
//     }
//   };

//   const onBookCrew = () => {
//     if (!selectedDate) {
//       Alert.alert('Error', 'Please select a date and time');
//     } else {
//       Alert.alert(
//         'Success',
//         `Crew booked: ${selectedGender}, ${eventType}, ${locationType}, Age: ${ageRange}, Date: ${selectedDate}`
//       );
//       closeDateModal();
//     }
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.container}>
//         <View style={styles.bookingContainer}>
//           <Text style={styles.heading}>Event Crew Request</Text>
//           <Text style={styles.noBookingText}>No crew requested yet.</Text>

//           <TouchableOpacity style={styles.submitButton} onPress={showBottomModal}>
//             <Text style={styles.submitButtonText}>Request Event Crew</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Bottom modal for selecting filters */}
//       <Modal
//         visible={bottomModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeBottomModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.bottomModalContent}>
//             <ScrollView>
//               {/* Gender Selection */}
//               <Text style={styles.modalTitle}>Select Gender</Text>
//               <View style={styles.genderContainer}>
//                 {['Male', 'Female', 'Any'].map((gender, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[styles.optionButton, selectedGender === gender && styles.selectedOptionButton]}
//                     onPress={() => setSelectedGender(gender)}
//                   >
//                     <Text style={[styles.optionText, selectedGender === gender && styles.selectedOptionText]}>
//                       {gender}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>

//               {/* Event Type Selection */}
//               <Text style={styles.modalTitle}>Event Type</Text>
//               <View style={styles.optionContainer}>
//                 {['Corporate', 'Brand Promotion'].map((type, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[styles.optionButton, eventType === type && styles.selectedOptionButton]}
//                     onPress={() => setEventType(type)}
//                   >
//                     <Text style={[styles.optionText, eventType === type && styles.selectedOptionText]}>
//                       {type}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>

//               {/* Location Type Selection */}
//               <Text style={styles.modalTitle}>Location Type</Text>
//               <View style={styles.optionContainer}>
//                 {['Local', 'Out of Station'].map((location, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[styles.optionButton, locationType === location && styles.selectedOptionButton]}
//                     onPress={() => setLocationType(location)}
//                   >
//                     <Text style={[styles.optionText, locationType === location && styles.selectedOptionText]}>
//                       {location}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>

//               {/* Age Range Selection */}
//               <Text style={styles.modalTitle}>Age Range</Text>
//               <View style={styles.optionContainer}>
//                 {['20-30', '30-40', '40-50'].map((age, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[styles.optionButton, ageRange === age && styles.selectedOptionButton]}
//                     onPress={() => setAgeRange(age)}
//                   >
//                     <Text style={[styles.optionText, ageRange === age && styles.selectedOptionText]}>
//                       {age}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>

//               <View style={styles.modalButtons}>
//                 <Button title="Next" onPress={onRequestCrews} />
//                 <Button title="Cancel" onPress={closeBottomModal} color="red" />
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>

//       {/* Date and Time picker modal */}
//       <Modal
//         visible={dateModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeDateModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.bottomModalContent}>
//             <Text style={styles.modalTitle}>Select Date and Time</Text>
//             <TouchableOpacity style={styles.submitButton} onPress={showDatePicker}>
//               <Text style={styles.submitButtonText}>
//                 {selectedDate ? selectedDate.toLocaleString() : 'Pick a Date & Time'}
//               </Text>
//             </TouchableOpacity>

//             <DateTimePickerModal
//               isVisible={isDatePickerVisible}
//               mode="datetime"
//               onConfirm={handleConfirm}
//               onCancel={hideDatePicker}
//             />

//             <View style={styles.modalButtons}>
//               <Button title="Book Crew" onPress={onBookCrew} />
//               <Button title="Cancel" onPress={closeDateModal} color="red" />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bookingContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//     textAlign: 'center',
//   },
//   noBookingText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   submitButton: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 15,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   bottomModalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//     position: 'absolute',
//     bottom: 0,
//     maxHeight: '90%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   genderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   optionButton: {
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   selectedOptionButton: {
//     backgroundColor: '#007BFF',
//   },
//   optionText: {
//     fontSize: 14,
//   },
//   selectedOptionText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

// export default EventCrewsScreen;

 

// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
// import Header from '../components/Header';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const GaruduianKidsData = [
//   {
//     id: '1',
//     title: 'Dropping School, Tuition',
//     price: '₹130 per trip',
//     rating: 5.0,
//     reviews: 19,
//     description: 'Safe and reliable transportation for your child to and from school and tuition classes.',
//     imageUrl: null,
//   },
//   {
//     id: '2',
//     title: 'Shopping and Market Assistance',
//     price: '₹180 per hour',
//     rating: 4.7,
//     reviews: 28,
//     description: 'Assistance with grocery shopping and errands while keeping your child engaged and safe.',
//     imageUrl: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     title: 'Travelling with Kids',
//     price: '₹120 per trip',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Careful attention and fun activities during trips to keep your child entertained and comfortable.',
//     imageUrl: null,
//   },
//   {
//     id: '4',
//     title: 'Night Shift Job Support for Kids',
//     price: '₹200 per night',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Overnight child care and support for parents working night shifts, ensuring your child’s comfort and safety.',
//     imageUrl: null,
//   },
//   {
//     id: '5',
//     title: 'Baby Sitter',
//     price: '₹150 per hour',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Professional babysitting service that ensures your child is in safe hands.',
//     imageUrl: null,
//   },
// ];

// const AttendedData = [
//   {
//     id: '1',
//     title: 'For Hospital Visit',
//     price: '₹130 per visit',
//     rating: 5.0,
//     reviews: 19,
//     description: 'Assistance for hospital visits, ensuring comfort and support during medical appointments or check-ups.',
//     imageUrl: null,
//   },
//   {
//     id: '2',
//     title: 'For Shopping Assistance',
//     price: '₹180 per hour',
//     rating: 4.7,
//     reviews: 28,
//     description: 'Companion service for shopping, helping with errands while ensuring convenience and assistance throughout.',
//     imageUrl: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     title: 'For Official Work',
//     price: '₹120 per hour',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Professional support for official tasks or work meetings, providing companionship and logistical assistance.',
//     imageUrl: null,
//   },
//   {
//     id: '4',
//     title: 'For Travelling with Parents',
//     price: '₹120 per trip',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Travel assistance to ensure safe and enjoyable trips, offering help with navigation and comfort for parents.',
//     imageUrl: null,
//   },
//   {
//     id: '5',
//     title: 'Baby Sitter',
//     price: '₹150 per hour',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Experienced babysitting service to care for your child in a safe and nurturing environment.',
//     imageUrl: null,
//   },
// ];

// const placeholderImage = 'https://via.placeholder.com/150';

// const MenuItem = ({ item, onAddPress }) => {
//   return (
//     <View style={styles.card}>
//       <View style={styles.cardContent}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.price}>{item.price}</Text>
//         <View style={styles.ratingContainer}>
//           <Text style={styles.rating}>{item.rating} ⭐</Text>
//           <Text style={styles.reviews}>({item.reviews})</Text>
//         </View>
//         <Text style={styles.description}>{item.description}</Text>
//       </View>
//       <Image source={{ uri: item.imageUrl || placeholderImage }} style={styles.image} />
//       <TouchableOpacity style={styles.addButton} onPress={() => onAddPress(item)}>
//         <Text style={styles.addButtonText}>ADD</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const EventCrewsScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [address, setAddress] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const handleAdd = () => {
//     console.log("Address:", address, "Date:", date.toLocaleDateString(), "Time:", time.toLocaleTimeString());
//     setModalVisible(false);
//   };

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirmDate = (selectedDate) => {
//     setDate(selectedDate);
//     hideDatePicker();
//   };

//   const showTimePicker = () => {
//     setTimePickerVisibility(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false);
//   };

//   const handleConfirmTime = (selectedTime) => {
//     setTime(selectedTime);
//     hideTimePicker();
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Book Garuduian for Kids</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList
//           data={GaruduianKidsData}
//           renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Book Attended For Parents</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList
//           data={AttendedData}
//           renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Modal for Address and Time Slot Selection */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Add Details for {selectedItem?.title}</Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Enter PickUp Address"
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Enter Drop Address"
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//             />


//             <TouchableOpacity onPress={showDatePicker}>
//               <Text style={styles.dateText}>
//                 Select Date: {date.toLocaleDateString()}
//               </Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={isDatePickerVisible}
//               mode="date"
//               onConfirm={handleConfirmDate}
//               onCancel={hideDatePicker}
//             />

//             <TouchableOpacity onPress={showTimePicker}>
//               <Text style={styles.timeText}>
//                 Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={isTimePickerVisible}
//               mode="time"
//               onConfirm={handleConfirmTime}
//               onCancel={hideTimePicker}
//             />

//             <View style={styles.modalButtons}>
//               <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF6347" />
//               <Button title="Book" onPress={handleAdd} color="#4CAF50" />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: '600',
//     marginLeft: 40,
//     marginTop: 40,
//     color: '#00b0ff',
//   },
//   textContainer: {
//     textAlign: 'center',
//     backgroundColor: '#fff',
//   },
//   card: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 8,
//     borderColor: '#ddd',
//     borderWidth: 1,
//   },
//   cardContent: {
//     flex: 1,
//     paddingRight: 8,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 16,
//     color: '#555',
//     marginVertical: 4,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rating: {
//     fontSize: 14,
//     color: '#4caf50',
//     fontWeight: 'bold',
//   },
//   reviews: {
//     fontSize: 14,
//     color: '#999',
//     marginLeft: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     resizeMode: 'cover',
//   },
//   addButton: {
//     backgroundColor: '#87CEFA',
//     borderRadius: 4,
//     paddingVertical: 6,
//     paddingHorizontal: 16,
//     position: 'absolute',
//     right: 16,
//     bottom: 16,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   label: {
//     alignSelf: 'flex-start',
//     fontSize: 14,
//     color: '#666',
//   },
//   picker: {
//     width: '100%',
//     height: 50,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 20,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#007BFF',
//     marginBottom: 20,
//   },
//   timeText: {
//     fontSize: 16,
//     color: '#007BFF',
//     marginBottom: 20,
//   },
// });

// export default EventCrewsScreen;



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import Header from '../components/Header'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";


const EventCrewData = [
  {
    id: '1',
    title: 'Event Setup Crew',
    price: '₹500 per hour',
    rating: 4.8,
    reviews: 30,
    description: 'Experienced crew for setting up stages, booths, and event decor to ensure a smooth start to your event.',
    imageUrl: null,
  } ,
  {
    id: '2',
    title: 'Event Registration Support',
    price: '₹300 per hour',
    rating: 4.5,
    reviews: 40,
    description: 'Friendly and professional staff to handle guest registration and check-in processes.',
    imageUrl: null,
  },
  {
    id: '3',
    title: 'Cleaning and Maintenance Crew',
    price: '₹400 per hour',
    rating: 4.2,
    reviews: 25,
    description: 'Dedicated crew to maintain cleanliness and order throughout the event.',
    imageUrl: null,
  },
];

 


const placeholderImage = 'https://via.placeholder.com/150';

const MenuItem = ({ item, onAddPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating} ⭐</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image source={{ uri: item.imageUrl || placeholderImage }} style={styles.image} />
      <TouchableOpacity style={styles.addButton} onPress={() => onAddPress(item)}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const EventCrewsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [address, setAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAdd = async () => {
    const bookingDetails = {
      title: selectedItem.title,
      pickupAddress: address,
      dropAddress: dropAddress,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: selectedItem.price,
    };

    try {
      const response = await fetch('http://your-backend-url/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const data = await response.json();
      console.log('Booking Response:', data);
      // Optionally reset fields after successful booking
      setModalVisible(false);
      setAddress('');
      setDropAddress('');
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    setTime(selectedTime);
    hideTimePicker();
  };

  return (
    <>
      <Header />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Book Event Crews</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={EventCrewData}
          renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>  
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Details for {selectedItem?.title}</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter Full Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
 

            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.dateText}>
                Select Date: {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePicker}
            />

            <TouchableOpacity onPress={showTimePicker}>
              <Text style={styles.timeText}>
                Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />

            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF6347" />
              <Button title="Book" onPress={handleAdd} color="#4CAF50" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 40,
    marginTop: 40,
    color: '#00b0ff',
  },
  textContainer: {
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  cardContent: {
    flex: 1,
    paddingRight: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: 14,
    color: '#999',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  addButton: {
    backgroundColor: '#87CEFA',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#666',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 20,
  },
});
export default EventCrewsScreen;
