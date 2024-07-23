const googleAPIKey = import.meta.env.VITE_GOOGLE_FONTS_API_KEY as string

function cleanFontFamily(fontFamily: string): string {
  return fontFamily.replace(/[0-9]+/g, "")
}

export async function getRandomGoogleFont(): Promise<string> {
  const listResponse = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=trending&key=${googleAPIKey}`)
  const list = await listResponse.json()
  const randomIndex = Math.floor(Math.random() * list.items.length)
  const randomFont = list.items[randomIndex]
  const fontURL = randomFont.files.regular || randomFont.files[Object.keys(randomFont.files)[0]]
  const fontFamily = cleanFontFamily(randomFont.family)
  const font = new FontFace(fontFamily, `url(${fontURL})`)
  await font.load()
  document.fonts.add(font)
  return fontFamily
}

export function cleanDescription(description: string, parentNames: string[], childName: string): string {
  const parentNameRegex = new RegExp(parentNames.join("|"), "gi")
  return description.replace(parentNameRegex, childName)
}