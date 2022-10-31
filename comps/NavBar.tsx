import styles from './../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  return(
    <div className={styles.header}>
      <div>
        <Link href={'/'}>
          <Image src="/img.png" alt={'logo'} width={300} height={60}/>
        </Link>

      </div>
      <div>
        <a href={'/'}>
          <Image src="/twitter.svg" alt={'fb'} width={20} height={60}/>
        </a>
        <a href={'/'}>
          <Image src="/facebook.svg" alt={'fb'} width={25} height={60}/>
        </a>
        <a href={'/'}>
          <Image src="/linkedin.svg" alt={'linkedIn'} width={25} height={60}/>
        </a>
        <a href={'/'}>
          <Image src="/inst.svg" alt={'instagram'} width={25} height={60}/>
        </a>
      </div>
    </div>
  )
}