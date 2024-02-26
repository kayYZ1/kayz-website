import { Box, Image } from "@chakra-ui/react"

export default function CatPicture() {
  return (
    <div>
      <Box boxSize="sm">
        <Image src={`/pixel-cat.jpg`} alt="cat" />
      </Box>
    </div>
  )
}