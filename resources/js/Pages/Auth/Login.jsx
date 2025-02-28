import { useEffect,useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm} from '@inertiajs/react';
import __ from '@/Hooks/useTranslation'


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <GuestLayout>
            <Head title={__('Log in')} />

            {status && <div className="mb-4 font-medium text-sm text-emerald-950">{status}</div>}

            <form onSubmit={submit}>
                <div className="relative my-6">
                    {/* Input con padding ajustado para el ícono */}
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full pl-20 pr-4 py-4 text-[1.4vh]"
                            placeholder={__('Email')}
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    {/* Contenedor del ícono */}
                        <svg
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 px-2 h-12 w-12 text-rose-900 border-r"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    {/* Mensaje de error */}
                        <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="relative my-6">
                    {/* Input con padding ajustado para el ícono */}
                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'} // Cambia entre 'text' y 'password'
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full pl-20 pr-4 py-4 text-[1.4vh]"
                        placeholder={__('Password')}
                        autoComplete="current-password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {/* Ícono para mostrar/ocultar contraseña */}
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute left-1 top-1/2 transform -translate-y-1/2"
                    >
                        {showPassword ? (
                            // Ícono para "mostrar contraseña"
                            <svg
                                className="px-2 h-12 w-12 text-rose-900 border-r "
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        ) : (
                            // Ícono para "ocultar contraseña"
                            <svg
                                className="px-2 h-12 w-12 text-rose-900 border-r "
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                />
                            </svg>
                        )}
                    </button>
                    {/* Mensaje de error */}
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-center mt-16">

                    <PrimaryButton className='' disabled={processing}>
                        <span className='mx-auto text-lg'>{__('Log in')}</span>
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
