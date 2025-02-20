/* eslint-disable @next/next/no-img-element */
import { Text } from '@/components/client-components'
import blogs from '../../db/blogs.json'
import { BiCalendar } from 'react-icons/bi'
import { Metadata } from 'next'
import { Title } from '@/components/Title'

export const metadata: Metadata = {
  title: 'Blog Page',
  description:
    'Blog about Nextjs, Reactjs, Tailwindcss, Typescript, AI and more',
}
//=======================
const Blog: React.FC = () => (
  <div id="Blog" className="layout">
    <div className="w-full">
      <Title title="Last Articles" />
      <div className="space-y-5 max-auto">
        {blogs.map((o, i) => (
          <a
            href={o.url}
            target="_blank"
            rel="noreferrer"
            key={i}
            className="flex flex-col pb-2 pt-4 rounded-sm hover:bg-zinc-400/10 lg:flex-row group"
          >
            <div className="order-2 w-full lg:self-start ">
              <div className="pl-2 ">
                <h2 className="w-10/12 text-xl font-bold text-gray-100 uppercase">
                  {o.title}
                </h2>
                <Text
                  lineClamp={1}
                  color="none"
                  className="pr-4 italic text-zinc-400"
                >
                  {o.description}
                </Text>
                <span className="flex items-center text-base italic tracking-tight text-zinc-500 gap-x-2">
                  <BiCalendar /> {o.pub}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
)
export default Blog
