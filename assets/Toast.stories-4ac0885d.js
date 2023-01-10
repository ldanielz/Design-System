var b=Object.defineProperty;var s=(t,i)=>b(t,"name",{value:i,configurable:!0});import{d as y,E as m,e as T,B as h,a as r}from"./index-51722e05.js";import{r as d}from"./index-42521bac.js";import{a as g,j as n}from"./jsx-runtime-c2142c84.js";import"./index-4bd83974.js";import"./es.object.get-own-property-descriptor-64192e07.js";const A={title:"Notifications/Toast",component:y,subcomponents:{EnayToastProvider:m,EnayToastViewport:T},argTypes:{variant:{options:["basic","success","danger","warning"],control:"inline-radio",table:{category:"Appearance"}},duration:{type:"number",table:{category:"Countdown"}}},parameters:{storySource:{source:`import {
  Box,
  Button,
  EnayToastProvider,
  EnayToastViewport,
  Toast,
  ToastProps,
} from '@enay-ui/react'
import type { Meta, StoryObj, ComponentStory } from '@storybook/react'
import { useState, useId } from 'react'

export default {
  title: 'Notifications/Toast',
  component: Toast,
  subcomponents: { EnayToastProvider, EnayToastViewport },
  argTypes: {
    variant: {
      options: ['basic', 'success', 'danger', 'warning'],
      control: 'inline-radio',
      table: {
        category: 'Appearance',
      },
    },
    duration: {
      type: 'number',
      table: {
        category: 'Countdown',
      },
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  decorators: [
    (Story) => (
      <EnayToastProvider swipeDirection="right">
        {Story()}
        <EnayToastViewport position="bottomLeft" />
      </EnayToastProvider>
    ),
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    duration: 6000,
  },
}

const Template: ComponentStory<typeof Toast> = (args) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const [counter, setCounter] = useState(0)
  const snackId = useId()

  const handleToastAdd = () => {
    const _id = \`\${snackId}-\${counter}\`
    setToasts((toasts) => [...toasts, { _id, ...args }])
    setCounter(counter + 1)
  }
  const handleRemove = (id: string) => {
    setToasts((toast) => toast.filter((item) => item.id !== id))
  }

  return (
    <Box as="div" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
      <Button onClick={handleToastAdd}>Basic</Button>
      <Button onClick={handleToastAdd}>Success</Button>
      <Button onClick={handleToastAdd}>Danger</Button>
      <Button onClick={handleToastAdd}>Warning</Button>

      {toasts.map((toast, index) => {
        const remove = () => {
          handleRemove(toast.id)
        }
        return (
          <Toast
            id={snackId}
            key={index}
            title={args.title}
            description={args.description}
            duration={args.duration}
            variant={args.variant}
            position="topLeft"
            onOpenChange={remove}
          />
        )
      })}
    </Box>
  )
}

const defaultArgs = {
  title: 'Toast Title',
  description: 'Toast Description',
  variant: 'basic' as ToastProps['variant'],
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
`,locationsMap:{default:{startLoc:{col:47,line:52},endLoc:{col:1,line:92},startBody:{col:47,line:52},endBody:{col:1,line:92}}}},controls:{sort:"requiredFirst"}},decorators:[t=>g(m,{swipeDirection:"right",children:[t(),n(T,{position:"bottomLeft"})]})]},I={args:{duration:6e3}},B=s(t=>{const[i,l]=d.useState([]),[p,f]=d.useState(0),u=d.useId(),a=s(()=>{const o=`${u}-${p}`;l(e=>[...e,{_id:o,...t}]),f(p+1)},"handleToastAdd"),v=s(o=>{l(e=>e.filter(c=>c.id!==o))},"handleRemove");return g(h,{as:"div",css:{display:"flex",flexDirection:"row",gap:"$2"},children:[n(r,{onClick:a,children:"Basic"}),n(r,{onClick:a,children:"Success"}),n(r,{onClick:a,children:"Danger"}),n(r,{onClick:a,children:"Warning"}),i.map((o,e)=>{const c=s(()=>{v(o.id)},"remove");return n(y,{id:u,title:t.title,description:t.description,duration:t.duration,variant:t.variant,position:"topLeft",onOpenChange:c},e)})]})},"Template"),x={title:"Toast Title",description:"Toast Description",variant:"basic"},C=B.bind({});C.args={...x};const L=["Primary","Default"];export{C as Default,I as Primary,L as __namedExportsOrder,A as default};
//# sourceMappingURL=Toast.stories-4ac0885d.js.map
