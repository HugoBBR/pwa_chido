import { useState } from 'react';

export default async function GetDashboardData() {
  const response = await fetch('data.JSON', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const responseData = await response.json();
  return responseData;
}
export async function GetVendor(accessToken: string, vendorId: number) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `https://app-itos-api-scuc.azurewebsites.net/vendors/${vendorId}`,
    options,
  );
  const responseData = await response.json();
  return responseData;
}
export async function GetVendors(accessToken: string) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('https://app-itos-api-scuc.azurewebsites.net/vendors', options);
  console.log(response);
  const responseData = await response.json();
  return responseData;
}

export async function PostVendors(accessToken: string, body: any) {
  console.log('Set vendors', accessToken);
  console.log('body', body);
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: body,
  };

  const response = await fetch('https://app-itos-api-scuc.azurewebsites.net/vendors', options);
  const responseData = await response.json();
  return responseData;
}
export async function editVendor(accessToken: string, body: any, vendorId: number) {
  console.log('Set vendors', accessToken);
  console.log('body', body);
  const options = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: body,
  };

  const response = await fetch(
    `https://app-itos-api-scuc.azurewebsites.net/vendors/${vendorId}`,
    options,
  );
  const responseData = await response.json();
  return responseData;
}
