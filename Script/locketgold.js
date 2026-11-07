var user_agent = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);
obj.Attention = "Kích hoạt Locket Gold thành công";

// https://www.revenuecat.com/docs/api-v1#tag/customer_info_model
function FakeSub(name, amount, currency) {
    return {
    'auto_resume_date': null,
    'display_name': name,
    'is_sandbox': false,
    'ownership_type': "PURCHASED",
    'billing_issues_detected_at': null,
    'management_url': "https://apps.apple.com/account/subscriptions",
    'period_type': "normal",
    'price': {
      'amount': amount,
      'currency': currency
    },
    'expires_date': "9999-06-16T00:00:00Z",
    'grace_period_expires_date': null,
    'refunded_at': null,
    'unsubscribe_detected_at': null,
    'original_purchase_date': "2026-06-16T00:00:00Z",
    'purchase_date': "2026-06-16T00:00:00Z",
    'store': "app_store",
    'store_transaction_id': "2000001108724193"
  };
};

function FakeEntitlements(identifier) {
    return {
        'expires_date': "2999-06-16T00:00:00Z",
        'grace_period_expires_date': null,
        'product_identifier': identifier,
        'purchase_date': "2026-06-16T00:00:00Z",
    };
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

obj.subscriber.subscriptions.locket_1600_1y = {
    'auto_resume_date': null,
    'display_name': "locket_1600_1y",
    'is_sandbox': true,
    'ownership_type': "PURCHASED",
    'billing_issues_detected_at': null,
    'management_url': "https://apps.apple.com/account/subscriptions",
    'period_type': "normal",
    'price': {
        'amount': 399000,
        'currency': "VND"
    },
    'expires_date': "9999-06-16T00:00:00Z",
    'grace_period_expires_date': null,
    'refunded_at': null,
    'unsubscribe_detected_at': null,
    'original_purchase_date': "2026-06-16T00:00:00Z",
    'purchase_date': "2026-06-16T00:00:00Z",
    'store': "app_store",
    'store_transaction_id': "2000001108724193"
};

obj.subscriber.entitlements.Gold = {
    'expires_date': "2999-06-16T00:00:00Z",
    'grace_period_expires_date': null,
    'product_identifier': "locket_1600_1y",
    'purchase_date': "2026-06-16T00:00:00Z",
};

obj.subscriber.subscriptions["com.locket.Locket.FilterPack_20Photos_500"] = {
    'auto_resume_date': null,
    'display_name': "com.locket.Locket.FilterPack_20Photos_500",
    'is_sandbox': true,
    'ownership_type': "PURCHASED",
    'billing_issues_detected_at': null,
    'management_url': "https://apps.apple.com/account/subscriptions",
    'period_type': "normal",
    'price': {
        'amount': 0,
        'currency': "VND"
    },
    'expires_date': "9999-06-16T00:00:00Z",
    'grace_period_expires_date': null,
    'refunded_at': null,
    'unsubscribe_detected_at': null,
    'original_purchase_date': "2026-06-16T00:00:00Z",
    'purchase_date': "2026-06-16T00:00:00Z",
    'store': "app_store",
    'store_transaction_id': "2000001108724193"
};

obj.subscriber.entitlements.effect_pack_20 = {
    'expires_date': "2999-06-16T00:00:00Z",
    'grace_period_expires_date': null,
    'product_identifier': "com.locket.Locket.FilterPack_20Photos_500",
    'purchase_date': "2026-06-16T00:00:00Z",
};

$done({
    'body': JSON.stringify(obj)
});