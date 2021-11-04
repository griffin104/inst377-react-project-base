export default function Example({
    children,
    number,
    text
}) {
    //Before the return statement is normal JS
    const newNumber = number * number
    let newText
    
    if (text) {
        newText = text.toUpperCase()
    }

    return (
        <div>
            <p>This is your new number: {newNumber}</p>
            <p>This is your new text: {newText}</p>
            {children}
        </div>
    )
}