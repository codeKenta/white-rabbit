export const isActiveOrHasActiveParent = (path, slug, localePrefix) => {
  const initialSegment = /(^\/[^/]+|^\/$)/ // Will get the first part of any path, so will get "/foo" from "/foo/bar"

  const trimmedPath = initialSegment.exec(path.replace(localePrefix, ''))
  const trimmedSlug = initialSegment.exec(slug.replace(localePrefix, ''))

  if (trimmedPath && trimmedSlug) {
    return trimmedPath[0] === trimmedSlug[0]
  } else {
    return false
  }
}

export const platformTypes = {
  discord: 'DISCORD',
  meetup: 'MEETUP',
}
