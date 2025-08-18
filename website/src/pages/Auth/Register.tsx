import React from 'react';
import { useForm } from '@mantine/form';
import { Button, Mantine } from '@dareheight/ui';
import styles from './Auth.module.scss';

const Register = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Mantine.Stack gap={12}>
            <Mantine.TextInput
              withAsterisk
              label="Full Name"
              placeholder="Enter your full name"
              key={form.key('fullName')}
              size="md"
              {...form.getInputProps('fullName')}
            />
            <Mantine.TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              size="md"
              {...form.getInputProps('email')}
            />
            <Mantine.PasswordInput
              label="Password"
              description="The password for your account"
              placeholder="*******"
              size="md"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
          </Mantine.Stack>

          <Mantine.Group justify="flex-end" mt="md">
            <Button type="submit" size="md">
              Submit
            </Button>
          </Mantine.Group>
        </form>
      </div>
    </div>
  );
};

export default Register;
