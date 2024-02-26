import { Center, Image } from "@chakra-ui/react"

export default function CatPicture() {
  return (
    <Center>
      <Image src={`/pixel-cat.png`} alt="cat" w="60" h="60" />
    </Center>
  )
}