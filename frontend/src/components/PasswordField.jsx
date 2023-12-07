import React, { useState } from 'react';
import { FormErrorMessage, Input, InputGroup, InputRightElement, FormControl, Text,Button } from '@chakra-ui/react';
import { Field } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordField({ label, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl>
      <InputGroup >

            <Input
         
	      {...props}
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
          
              focusBorderColor="#866FAD"
              width="40.5em"
              placeholdersize="md"
              borderColor="#575450"
              height="64px"
              borderRadius={10}
            />
	        <InputRightElement width="4.5rem">
		<Button h='1.75rem' size='sm' onClick={console.log("f")}>
        
        </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage name={props.name} />
      {props.errors[props.name] && props.touched[props.name] ? (
        <Text marginLeft={10} color="red.500">
          {props.errors[props.name]}
        </Text>
      ) : null}
    </FormControl>
  );
}

export default PasswordField;
