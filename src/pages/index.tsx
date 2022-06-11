import styles from './index.less';
import { useRequest, request, useModel } from 'umi';
import { List, Avatar } from 'antd';
import dayjs from 'dayjs'
import { getCurrentAPIUrl } from '@/utils/utils';

export interface Attributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Post {
  id: number;
  attributes: Attributes;
}

export default function IndexPage() {
  const { initialState, loading: initialState_loading, error: initialState_error, refresh, setInitialState } = useModel('@@initialState');
  const { data, error, loading } = useRequest(() => {
    return request(`${getCurrentAPIUrl()}/api/posts`, {
      headers: {
        Authorization: `Bearer ${initialState.jwt}`,
      },
    });
  }, {});

  return (
    <div>
      <h2>Posts:</h2>
      <List
        itemLayout="horizontal"
        dataSource={data?.data}
        renderItem={(item: Post) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item?.attributes?.title}</a>}
              description={`Created at: ${dayjs(item?.attributes?.createdAt).format('DD/MM/YYYY HH:mm')}`}
            />
          </List.Item>
        )}
      />      
    </div>
  );
}
