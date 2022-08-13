const childTsx = (props, ctx) => {
  const { times } = props
  console.log(props, 'props')
  console.log(ctx, 'ctx')
  return (
    <>
      <div>child tsx</div>
      <p>{times.value}</p>
    </>
  )
}
childTsx.displayName = 'child-tsx'
export default childTsx
