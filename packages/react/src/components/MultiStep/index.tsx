import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div>
      <MultiStepContainer>
        <Label>
          Passo {currentStep} de {size}
        </Label>

        <Steps css={{ '--steps-size': size }}>
          {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
            return <Step key={step} active={currentStep >= step} />
          })}
        </Steps>
      </MultiStepContainer>
    </div>
  )
}

MultiStep.displayName = 'MultiStep'
