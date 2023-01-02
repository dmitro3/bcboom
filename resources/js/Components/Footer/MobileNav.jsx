import { styled } from '@mui/system'
import React from 'react'
import { Flex } from '../UtilComponents/Flex'


const MobieNavWrapper = styled('div')(() => ({
    width: '100%',
    height: '100px',
    backgroundColor: '#05071D',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,

}))

const MobileDivider = styled('div')(() => ({
    position: 'absolute',
    bottom: '10px',
    left: '30%',
    // display: 'flex',
    height: '2px',
    borderRadius: '50px',
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '40%',
}))

const MobileNav = () => {
  return (
    <MobieNavWrapper>
        <Flex>

        </Flex>
        <MobileDivider/>
    </MobieNavWrapper>
  )
}

export default MobileNav