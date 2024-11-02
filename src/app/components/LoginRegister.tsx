'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { z } from 'zod';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/lib/features/modals/modal-slice';
import { RootState } from '@/lib/store';
import Modal from '@/lib/features/modals/register/Modal';

const registerSchema = z
  .object({
    userName: z.string().regex(/^[A-Za-z\s]+$/, {
      message: 'Deve haver apenas letras.',
    }),
    cpf: z.string().regex(/^\d+$/, { message: 'CPF inválido.' }),
    email: z.string().email({ message: 'Email inválido.' }),
    cellphone: z.string().regex(/^\d{2}9\d{4}\d{4}$/, {
      message: 'O primeiro número após o DDD deve ser 9.',
    }),
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
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais.',
    path: ['confirmPassword'],
  });

export const LoginRegister: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen);
  const [formData, setFormData] = useState({
    userName: '',
    cpf: '',
    email: '',
    password: '',
    cellphone: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const formatCpf = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return cleaned;
  };

  const formatCellphone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let formattedValue: string;
    if (name === 'cellphone') {
      formattedValue = formatCellphone(value);
    } else if (name === 'cpf') {
      formattedValue = formatCpf(value);
    } else {
      formattedValue = value;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanedFormData = {
      ...formData,
      cpf: formData.cpf.replace(/\D/g, ''),
      cellphone: formData.cellphone.replace(/\D/g, ''),
    };

    const result = registerSchema.safeParse(cleanedFormData);
    if (!result.success) {
      const formattedErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        formattedErrors[error.path[0]] = error.message;
      });

      setErrors(formattedErrors);
    } else {
      setErrors({});
      dispatch(openModal());
      console.log('Modal aberto!');
    }
  };

  return (
    <section className='mb-16 mt-16 bg-white p-12 shadow-lg'>
      <div className='mb-10 flex items-center justify-center'>
        <FontAwesomeIcon icon={faUser} className='mr-3 h-8 w-8' />
        <h1 className='text-3xl'>Cadastre-se</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='grid gap-5 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <label
              className={`${errors.userName ? 'text-red-500' : 'text-black'}`}
              htmlFor='fName'
            >
              Nome
            </label>
            <input
              className={`${
                errors.userName
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              } mb-5 mt-1 rounded-lg`}
              type='text'
              name='userName'
              id='fName'
              required
              minLength={3}
              maxLength={30}
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && (
              <span className='max-w-52 text-xs text-red-500'>
                {errors.userName}
              </span>
            )}
          </div>

          <div className='flex flex-col'>
            <label
              className={`${errors.cpf ? 'text-red-500' : 'text-black'}`}
              htmlFor='fCpf'
            >
              CPF
            </label>
            <input
              className={`${
                errors.cpf
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              } mb-5 mt-1 rounded-lg`}
              type='text'
              name='cpf'
              id='fCpf'
              required
              minLength={11}
              maxLength={11}
              value={formData.cpf}
              onChange={handleChange}
            />
            {errors.cpf && (
              <span className='max-w-52 text-xs text-red-500'>
                {errors.cpf}
              </span>
            )}
          </div>
        </div>

        <div className='grid gap-5 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <label
              className={`block ${errors.email ? 'text-red-500' : 'text-black'}`}
              htmlFor='fEmail'
            >
              Email
            </label>
            <input
              className={`${
                errors.email
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              } mb-5 mt-1 rounded-lg`}
              type='email'
              name='email'
              id='fEmail'
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className='max-w-52 text-xs text-red-500'>
                {errors.email}
              </span>
            )}
          </div>

          <div className='flex flex-col'>
            <label
              className={`block ${errors.cellphone ? 'text-red-500' : 'text-black'}`}
              htmlFor='fTel'
            >
              Celular
            </label>
            <input
              className={`${
                errors.cellphone
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              } mb-5 mt-1 rounded-lg`}
              type='tel'
              name='cellphone'
              placeholder='(DDD) 9xxxx-xxxx'
              id='fTel'
              minLength={11}
              maxLength={11}
              required
              value={formData.cellphone}
              onChange={handleChange}
            />
            {errors.cellphone && (
              <span className='max-w-52 text-xs text-red-500'>
                {errors.cellphone}
              </span>
            )}
          </div>
        </div>

        <div className='grid gap-5 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <label
              className={`block ${errors.password ? 'text-red-500' : 'text-black'}`}
              htmlFor='fPassword'
            >
              Senha
            </label>
            <input
              className={`${
                errors.password
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              } mb-2 mt-1 rounded-lg`}
              type='password'
              name='password'
              minLength={6}
              maxLength={12}
              id='fPassword'
              required
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className='max-w-52 text-xs text-red-500'>
                {errors.password}
              </span>
            )}
          </div>

          <div className='flex flex-col'>
            <label
              className={`block ${errors.confirmPassword ? 'text-red-500' : 'text-black'}`}
              htmlFor='fConfPassword'
            >
              Confirmar Senha
            </label>
            <input
              className={`${
                errors.confirmPassword
                  ? 'border-red-500 bg-red-50 text-red-500 placeholder-red-500'
                  : 'border-gray-300 text-black placeholder-gray-400'
              } mb-2 mt-1 rounded-lg`}
              type='password'
              name='confirmPassword'
              minLength={6}
              maxLength={12}
              id='fConfirmPassword'
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className='text-xs text-red-500'>
                {errors.confirmPassword}
              </span>
            )}
          </div>
        </div>

        <input
          className='mt-10 block w-full cursor-pointer rounded-lg bg-blue-600 p-3 font-bold text-white hover:bg-black hover:font-bold'
          type='submit'
          value='Cadastrar'
        />
      </form>

      {isOpen && <Modal />}
    </section>
  );
};
