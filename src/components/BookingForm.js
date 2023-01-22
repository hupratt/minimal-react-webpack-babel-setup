import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from '../screens/FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';
import Loading from '../images/loading.gif';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = ({ availableTimes, setavailableTimes }) => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const { isLoading, response, submit } = useSubmit();
  console.log('response' + response);
  const { onOpen } = useAlertContext();
  // open the alert window once the state is updated
  useEffect(() => {
    response && onOpen(response.type, response.message);
    if (response && response.type == 'success') {
      formik.resetForm();
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      guests: 1,
      type: '',
      comment: '',
      dateTime: '',
    },
    onSubmit: (data) => {
      console.log(`isLoading: ${isLoading}`);
      console.log(`response: ${response}`);
      console.log(`submit: ${submit}`);
      // console.log(response);
      // submit('/', data);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      dateTime: Yup.string().required('Required'),
      comment: Yup.string().required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
  });
  const isInPast = (date) => {
    return date > new Date();
  };

  return (
    <ChakraProvider>
      <FullScreenSection
        isDarkBackground
        backgroundColor="#495E57"
        py={16}
        spacing={8}
      >
        <VStack w="1024px" p={32} alignItems="flex-start">
          <Heading as="h1" id="contactme-section">
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <form
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              <VStack spacing={4}>
                <FormControl
                  isInvalid={
                    formik.errors.dateTime && formik.touched.dateTime
                  }
                >
                  <FormLabel htmlFor="dateTime">
                    Select Date and Time
                  </FormLabel>
                  <DatePicker
                    showTimeSelect
                    withPortal
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    filterDate={isInPast}
                    // onChange={formik.handleChange}
                    excludeTimes={[
                      setHours(setMinutes(new Date(), 0), 17),
                      setHours(setMinutes(new Date(), 30), 18),
                      setHours(setMinutes(new Date(), 30), 19),
                      setHours(setMinutes(new Date(), 30), 17),
                    ]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                  {/* <Input
                    placeholder="Select Date and Time"
                    size="md"
                    onChange={formik.handleChange}
                    type="datetime-local"
                    {...formik.getFieldProps('dateTime')}
                  /> */}

                  <FormErrorMessage>
                    {formik.errors.dateTime}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.errors.guests && formik.touched.guests
                  }
                >
                  <FormLabel htmlFor="guests">
                    Number of guests
                  </FormLabel>
                  <RadioGroup onChange={formik.handleChange}>
                    <Stack direction="row">
                      <Radio value="1">1</Radio>
                      <Radio value="2">2</Radio>
                      <Radio value="3">3+</Radio>
                    </Stack>
                  </RadioGroup>

                  <FormErrorMessage>
                    {formik.errors.guests}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.errors.firstName &&
                    formik.touched.firstName
                  }
                >
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    type="text"
                    {...formik.getFieldProps('firstName')}
                  />
                  <FormErrorMessage>
                    {formik.errors.firstName}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.errors.email && formik.touched.email
                  }
                >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('email')}
                  />
                  <FormErrorMessage>
                    {formik.errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="type">Occasion</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('type')}
                  >
                    <option value="newb">
                      I'm not good at cooking so I come here
                    </option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.errors.comment && formik.touched.comment
                  }
                >
                  <FormLabel htmlFor="comment">
                    Do you have any special requests or allergies?
                  </FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('comment')}
                  />
                  <FormErrorMessage>
                    {formik.errors.comment}
                  </FormErrorMessage>
                </FormControl>

                {isLoading ? (
                  <img style={{ height: '40px' }} src={Loading} />
                ) : (
                  <Button
                    type="submit"
                    colorScheme="green"
                    style={{ background: 'rgb(103, 130, 121)' }}
                    width="full"
                    disabled={
                      formik.errors.comment ||
                      formik.errors.email ||
                      formik.errors.firstName
                    }
                  >
                    Submit
                  </Button>
                )}
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    </ChakraProvider>
  );
};

export default BookingForm;
