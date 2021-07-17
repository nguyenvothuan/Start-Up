import React from 'react'
//import { Icon } from '../Sidebar/SideBarElements'
import { FormButton, FormContent, FormInput, FormLabel, FormWrap, Text, Icon,FormContainer, FormH1, Form } from './SignInElements'

const SignIn = () => {
    return (
        <FormContainer>
            <FormWrap>
                <Icon to="/">Dan Nam</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='pass'>Password</FormLabel>
                        <FormInput type='pass' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </FormContainer>
    )
}

export default SignIn
