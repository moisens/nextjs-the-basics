export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(userNinja => {
    return{
      params:{ id: userNinja.id.toString() }
    }
  });

  return{
    paths,
    fallback: false
  }

}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users${params.id}`);
  const datas = await res.json();

  return{
    props:{ datas }
  }
}



const Details = () => {
  return (
    <div>
      <h2>Detail paige</h2>
    </div>
  );
}
 
export default Details;


