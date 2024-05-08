import { Helmet } from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singnInForm = z.object({
  email: z.string().email()  
  
})

type SingnInForm = z.infer<typeof singnInForm >

export const SignIn = () => {
//handleSubmit evita propagação do formulario para o navegador e reload
  const {register, handleSubmit, formState:{isSubmitting }} = useForm<SingnInForm>()
// isSubmitting retorna true quando o formulario esta sendo enviado

  const handleSingnIn = async (data : SingnInForm) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success("Link de authenticação enviado para seu e-mail.",{
        action: {
          label: 'Reenviar',
          onClick: () => handleSingnIn(data)
        }
      })
      
    } catch (error) {
      toast.error("Credenciais invalidas ")
      
    }
  }//hi order fn // função que recebe outra fn  patter

  return (
    <>
     <Helmet title="login"/>
      <Button variant={'outline'} asChild  className='absolute right-4 top-8'>
        <Link to={"/sing-up"} >
          Novo estabelecimento
        </Link>
      </Button>
      
     <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight ">
              Bem vindo ao seu painel
            </h1>
            <p className='text-muted-foreground text-sm'>
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          
          <form className='space-y-4' onSubmit={handleSubmit(handleSingnIn)} >
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-maill</Label>
              <Input id='email'  type='email' {...register('email')} />

            </div>
            <Button disabled={isSubmitting} className='w-full' type='submit'>Acessar painel</Button>
          </form>
        </div>

      </div>
    </>
  )
}
