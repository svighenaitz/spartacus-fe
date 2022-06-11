import styles from './index.less';
import { useRequest, request, useModel } from 'umi'


export default function IndexPage() {
  const { initialState, loading: initialState_loading , error: initialState_error, refresh, setInitialState } = useModel('@@initialState');
  const { data, error, loading } = useRequest(() => {
    return request(`http://localhost:1337/api/posts`, { headers: {
      Authorization: `Bearer ${initialState.jwt}`
    } } );
  }, { });

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <div>
      <h1 className={styles.title}>Results:</h1>      
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>  
}
