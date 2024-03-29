export type Review = {
	id: string
	rating: number
	user: {
		name: string
	}
	text: string
	time_created: string
	url: string
}

export type Business = {
	id: string
	location?: {
		address1: string
		address2?: string
		address3?: string
	}
	name: string
	alias: string
	display_phone?: string
	reviews: Review[]
	review_count?: number
	rating?: number
	photos?: string[]
	url?: string
	categories: {
		title: string
	}[]
	price: string | null
}

export type YelpSuccessResponse<Data = unknown> = { data: Data }
export type YelpErrorResponse = { errors: { message: string }[] }
export type YelpResponse<Data = unknown> = Partial<
	YelpSuccessResponse<Data> & YelpErrorResponse
>
export type FavoritesResponse = Record<string, Business>
export type BusinessResponse = { business: Business }
export type ReviewsResponse = {
	reviews: {
		total: number
		review: Review[]
	}
}
