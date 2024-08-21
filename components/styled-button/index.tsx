import { Button } from 'react-native'

interface StyledButtonProps {
    text: string
    onClick: () => void
    color?: string
}

export default function StyledButton
({text,onClick,color}:StyledButtonProps){
    return (
        <Button 
        color={color}
        onPress={onClick}
        title={text} />
    )
}