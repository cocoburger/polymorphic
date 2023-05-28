/**
 * 1. Text 컴포넌트는 as (prop)을 통해 다양한 태그를 렌더링 할 수 있어야 한다.
 * 2. as prop의 기본값은 span으로 지정한다.
 * 3. as prop의 값에 따라 다른 태그를 렌더링 할 수 있어야 한다.
 */

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;


const Text = <C extends React.ElementType>({as, children, ...rest}: TextProps<C>) => {
  const Component = as || 'span';
  return <Component {...rest}>{children}</Component>
};

export default function Index() {
  return (
      <>
        <Text>Span Text</Text>
        <Text as='h1'>Span Text</Text>
        <Text as='div'>This is div Text</Text>
        <Text
            as='a'
            href='https://google.com'
        >
          This anchor Text
        </Text>
      </>
  )
}
