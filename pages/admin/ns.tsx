<Box
className='bg-darkBlue10'
minHeight='100vh'
>
<Head>
  <title>Restaurants</title>
  <MetaSeo
    title='Dashboard'
    desc='Welcome to admin main page!'
  />
  <link
    rel='icon'
    href='/favicon.ico'
  />
</Head>
<Header />

<Box as='main' className='flex  mx-8 '>
  <PushModul />
  {showModul && <Modul />}
  <Box
    bg='#27283C'
    as='section'
    className='flex items-center w-5/6 px-8 mt-20'
    borderRadius={16}
    height={73}
  >
    <Text
      as='p'
      color='white'
    >
      Restaurants
    </Text>
    <InputGroup className='flex justify-end items-center  gap-7'>
      <Select
        bgColor='#5A5B70'
        borderRadius={14}
        width={200}
        height={35}
        placeholder='Select category'
        mr='2'
      >
        <option value='Papa Johns'>Papa John's</option>
        <option value='Burger King'>Burger King</option>
        <option value='Mcdonalds'>McDonald's</option>
      </Select>
      <Box>
        <Button
          borderRadius={14}
          colorScheme='pink'
          onClick={handleAddRestaurantClick}
        >
          + ADD RESTAURANTS
        </Button>
      </Box>
    </InputGroup>
  </Box>
  
</Box>



</Box>