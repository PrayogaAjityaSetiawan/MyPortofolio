const Button = (props) => {
    const { children } = props
    return (
        <div className="py-2 px-4 border-[1px] border-zinc-700 rounded-full">
            <p>{children}</p>
        </div>
    )
}
export default Button;