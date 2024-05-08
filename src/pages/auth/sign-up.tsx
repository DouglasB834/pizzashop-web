import { Helmet } from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singnUpForm = z.object({
  email: z.string().email(),
  phone: z.string(),  
  restaurantName : z.string(),
  managerName: z.string(),
  
}) 

type SingUPForm = z.infer<typeof singnUpForm >

export const SignUp = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, formState:{isSubmitting }} = useForm<SingUPForm>()
// isSubmitting retorna true quando o formulario esta sendo enviado

  const handleSingnUp = async (data : SingUPForm) => {
    try {
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success("Restaurante cadastrado com sucesso.",{
        action: {
          label: 'fazer login',
          onClick: () =>navigate("/sing-in")
        }
      })
      
    } catch (error) {
      toast.error("Error ao cadastrar restaurante. ")
      
    }
  }//hi order fn // função que recebe outra fn  patter

  return (
    <>
     <Helmet title="Cadastro" />
     <div className="p-8">
     <Button variant={'outline'} asChild  className='absolute right-4 top-8'>
        <Link to={"/sing-in"} >
          Fazer login
        </Link>
      </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight ">
             Crie sua conta Grátis
            </h1>
            <p className='text-muted-foreground text-sm'>
              Comece suas vendas por aqui!
            </p>
          </div>

          <form className='space-y-4' onSubmit={handleSubmit(handleSingnUp)} >


            <div className='space-y-2'>
              <Label htmlFor='restaurantName'>Nome do restaurante</Label>
              <Input id='restaurantName'  type='text' {...register('restaurantName')} />
            </div>

            
            <div className='space-y-2'>
              <Label htmlFor='managerName'>seu nome</Label>
              <Input id='managerName'  type='text' {...register('managerName')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-maill</Label>
              <Input id='email'  type='email' {...register('email')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>seu telefone</Label>
              <Input id='phone'  type='tel' {...register('phone')} />
            </div>


            <Button disabled={isSubmitting} className='w-full' type='submit'>
              Finalizar cadastro
            </Button>
            
            <p className='text-center text-sm text-muted-foreground leading-relaxed px-6'>
              Ao continuar, você concorda com nosso termos de {" "}<a href="#" className='underline underline-offset-2 '>serviços</a>
              {" "} e{" "}
              <a href="#"className='underline underline-offset-2 '>politicas de privacidade</a>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}