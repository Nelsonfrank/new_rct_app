import axios from 'axios';

axios.defaults.baseURL = 'http://142.93.210.105:1122';

export const BASEURL = `http://142.93.210.105:1122`;
/**
 * Fetch count
 * @function
 * @name Counter
 */
export const Counter = () => {
  return axios
    .get(`/api/v1/counter`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Fetch Tender Request
 * @function
 * @name TenderRequest
 */
export const GetAllTenderRequest = (userToken: string) => {
  return axios
    .get(`/api/v1/seller/tender/offset/0`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Send Tender Request
 * @function
 * @name SendTenderRequest
 */
export const SendTenderRequest = (payload: any, sellerToken: any) => {
  return axios
    .post(`/api/v1/seller/tender`, payload, {
      headers: {
        Authorization: `Bearer ${sellerToken}`,
      },
    })
    .then((response) => response);
};
/**
 * Fetch Tender Given
 * @function
 * @name TenderGiven
 */
export const GetAllTenderGiven = (userToken: string) => {
  return axios
    .get(`/api/v1/seller/tender/offset/0`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Fetch list of all Buyers
 * @function
 * @name GetAllBuyers
 */
export const GetAllBuyers = (token: string) => {
  return axios
    .get(`/api/v1/buyer/all-buyer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Give Tender
 * @function
 * @name GiveTender
 */
export const GiveTender = (payload: any, token: string) => {
  return axios
    .post(`/api/v1/buyer/give-tender`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};
/**
 * Fetch Platfrom  by Leader id
 * @function
 * @name GetPlatformByLeaderId
 */
export const GetPlatformByLeaderId = (leaderToken: string) => {
  return axios
    .get(`/api/v1/leader/leader-platform`, {
      headers: {
        Authorization: `Bearer ${leaderToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Fetch list of all sellers
 * @function
 * @name GetAllUsers
 */
export const GetAllUsers = () => {
  return axios
    .get(`/api/v1/seller/offset/0`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Fetch list of all sellers By Variety
 * @function
 * @name GetSellersByVariety
 */
export const GetSellersByVariety = (payload: any) => {
  return axios
    .post(`/api/v1/seller/variety`, payload)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Get Variety By UserId
 * @function
 * @name GetVarietyBySellerId
 */
export const GetVarietyBySellerId = (token: any) => {
  return axios
    .get(`/api/v1/variety/seller`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Fetch list of all Tender Request By Seller
 * @function
 * @name GetTenderRequestBySeller
 */
export const GetTenderRequestBySeller = (token: any) => {
  return axios
    .get(`/api/v1/buyer/tender-request`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Create new seller
 * @param token
 * @function
 * @name AddSeller
 */
export const AddSeller = (payload: any, adminId: any, token: any) => {
  return axios
    .post(`/api/v1/seller/${adminId}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Delete seller
 * @param sellerId
 * @function
 * @name DeleteSeller
 */
export const DeleteSeller = (sellerId: any, adminAccessToken: any) => {
  return axios
    .delete(`/api/v1/seller/${sellerId}`, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Disable seller
 * @param sellerId
 * @function
 * @name DisableSeller
 */
export const DisableSeller = (
  sellerId: any,
  payload: { toggle: string },
  adminAccessToken: string,
) => {
  return axios
    .put(`/api/v1/seller/toggle/${sellerId}`, payload, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Update seller
 * @param sellerId
 * @function
 * @name UpdateSeller
 */
export const UpdateSellerById = (
  sellerId: any,
  payload: any,
  adminAccessToken: string,
) => {
  return axios
    .put(`/api/v1/seller/toggle/${sellerId}`, payload, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};
/**
 * Complete User Registration
 * @param payload
 * @function
 * @name CompleteRegistration
 */
export const CompleteRegistration = (payload: any) => {
  return axios
    .put(`/api/v1/user/complete`, payload)
    .then((response) => response)
    .catch((error) => error);
};
/**
 * Get seller by id
 * @function
 * @name GetSellerById
 */
export const GetSellerById = (sellerId: string) => {
  return axios
    .get(`/api/v1/seller/${sellerId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetSellerByPlatform = (platformId: string) => {
  return axios
    .get(`/api/v1/seller/platform/${platformId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetVarietyByPlatformId = (platformId: string) => {
  return axios
    .get(`/api/v1/variety/platform/${platformId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetAllTenderRequests = () => {
  return axios
    .get(`/api/v1/seller/tender`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetTenderRequestById = (tenderRequestId: string) => {
  return axios
    .get(`/api/v1/seller/tender/${tenderRequestId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const PostTenderRequest = (payload: PostTenderRequestType) => {
  return axios
    .post(`/api/v1/seller/tender`, payload)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Create Platform
 * @param payload
 * @param token
 */
export const CreatePlatform = (
  payload: CreatePlatformTypes,
  token: string | null,
) => {
  return axios
    .post(`/api/v1/platform`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const GetAllPlatform = () => {
  return axios
    .get(`/api/v1/platform/offset/0`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetSellerByPlatformId = (platformId: string) => {
  return axios
    .get(`/api/v1/seller/platform/${platformId}/offset/0`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Delete Platform
 * @param sellerId
 * @function
 * @name DeleteSeller
 */
export const DeletePlatform = (adminId: any, adminAccessToken: any) => {
  return axios
    .delete(`/api/v1/platform/${adminId}`, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Disable Platfrom
 * @param platformId
 * @function
 * @name DisablePlatfrom
 */
export const DisablePlatfrom = (
  platformId: any,
  payload: { toggle: string },
  adminAccessToken: string,
) => {
  return axios
    .put(`/api/v1/seller/toggle/${platformId}`, payload, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const CreateLeader = (
  payload: { dial_code: string; phone_number: string; name: string },
  platformId: string | null,
  token: string,
) => {
  return axios
    .post(`/api/v1/leader/${platformId}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const GetAllLeader = (token: string) => {
  return axios
    .get(`/api/v1/leader`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const FetchAllPlatform = () => {
  return axios
    .get(`/api/v1/platform`)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchPlatformByRegion = (regionId: string) => {
  return axios
    .get(`/api/v1/platform/region/${regionId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchPlatformByCountry = (countryId: string) => {
  return axios
    .get(`/api/v1/platform/country/${countryId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchPlatformById = (platformId: string) => {
  return axios
    .get(`/api/v1/platform/${platformId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const UserLogin = (payload: any) => {
  return axios
    .post(`/api/v1/user/signin`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const CreateToken = (payload: any) => {
  return axios
    .post(`/api/v1/user/createotp`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const VerifyToken = (payload: any) => {
  return axios
    .post(`/api/v1/user/verifyotp`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const GenerateToken = (token: any) => {
  return axios
    .post(`/api/v1/session/generatetoken/${token}`)
    .then((response) => response)
    .catch((error) => error);
};

export const RefreshToken = (token: any) => {
  return axios
    .post(`/api/v1/session/refreshtoken`, token)
    .then((response) => response)
    .catch((error) => error.message);
};

export const GetUserInformation = (token: any) => {
  return axios
    .get(`/api/v1/user/information`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const ManagementLogin = (payload: any) => {
  return axios
    .post(`/api/v1/user/signin-password`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const GenerateTokenByPassword = (payload: any) => {
  return axios
    .post(`/api/v1/session/generatetoken-by-password`, payload)
    .then((response) => response)
    .catch((error) => error.message);
};

export const AddVariety = (payload: any, token: string) => {
  return axios
    .post(`/api/v1/variety`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error.message);
};

export const GetAllVariety = () => {
  return axios
    .get(`/api/v1/variety`)
    .then((response) => response)
    .catch((error) => error.message);
};

export const AddPriceRate = (payload: any) => {
  return axios
    .post(`/api/v1/price-rate`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const GetPriceRate = () => {
  return axios
    .get(`/api/v1/price-rate`)
    .then((response) => response)
    .catch((error) => error);
};
