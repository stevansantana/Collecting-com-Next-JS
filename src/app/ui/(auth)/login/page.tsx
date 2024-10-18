'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { z } from 'zod';
import { useState } from 'react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z
    .string()
    .regex(/[a-z]/, {
      message: 'No mínimo uma letra minúscula.',
    })
    .regex(/[A-Z]/, {
      message: 'No mínimo uma letra maiúscula.',
    })
    .regex(/[0-9]/, { message: 'No mínimo um número.' })
    .regex(/[\W_]/, {
      message: 'No mínimo um caractere especial.',
    }),
});

export default function Login() {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailError(null);
    setPasswordError(null);

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      result.error.errors.forEach((error) => {
        if (error.path[0] === 'email') {
          setEmailError(error.message);
        } else if (error.path[0] === 'password') {
          setPasswordError(error.message);
        }
      });
    } else {
      console.log('Formulário válido!', result.data);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (emailError) {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (passwordError) {
      setPasswordError(null);
    }
  };

  return (
    <section className='rounded-lg bg-white p-12 shadow-lg'>
      <div className='mb-10 flex items-center justify-center'>
        <FontAwesomeIcon icon={faUser} className='mr-3 h-10 w-10' />
        <h1 className='text-5xl'>Login</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label
            className={`block ${emailError ? 'text-red-500' : 'text-black'}`}
            htmlFor='fEmail'
          >
            Email
          </label>
          <input
            className={`mb-1 mt-1 w-full rounded-lg ${
              emailError
                ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                : 'border-gray-300 text-black placeholder-gray-400'
            }`}
            type='email'
            name='email'
            id='fEmail'
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {emailError && (
          <p className='max-w-52 text-xs text-red-500'>{emailError}</p>
        )}

        <div className='mb-8 mt-8'>
          <div>
            <label
              className={`block ${passwordError ? 'text-red-500' : 'text-black'}`}
              htmlFor='fPassword'
            >
              Senha
            </label>
            <input
              className={`mb-1 mt-1 w-full rounded-lg ${
                passwordError
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              }`}
              type='password'
              id='fPassword'
              name='password'
              required
              minLength={6}
              maxLength={12}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {passwordError && (
            <p className='max-w-52 text-xs text-red-500'>{passwordError}</p>
          )}
        </div>

        <input
          className='mt-10 block w-full cursor-pointer rounded-lg bg-blue-600 p-3 font-bold text-white hover:bg-black hover:font-bold'
          type='submit'
          value='Entrar'
        />

        <div className='mt-7 flex items-center justify-between'>
          <Link className='text-end text-sm text-blue-800' href='/ui/register'>
            Criar uma conta
          </Link>

          <Link className='text-end text-sm text-blue-800' href=''>
             Esqueci a senha
          </Link> 
        </div>
      </form>
    </section>
  );
}
