#![cfg_attr(not(feature = "std"), no_std)]

use sp_runtime::FixedU128;

/// Balance of an account.
pub type Balance = u128;

/// Price
pub type Price = FixedU128;

/// Balance of an account.
pub type AssetId = u32;

/// Signed version of Balance
pub type Amount = i64;

pub enum CurrencyId {
    NATIVE = 0,
    S5K = 1,
    BTC = 2,
    DOT = 3,
}
