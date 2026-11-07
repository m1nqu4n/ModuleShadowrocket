// Idea: @duyvinh09
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || '';
var obj = JSON.parse($response.body);
if (ua.includes("Locket")) {
    obj.Attention = "Kích hoạt Locket Gold thành công";
    obj.entries = obj.entries || {};
    Object.assign(obj.entries, {
        'feature_gates': JSON.stringify({
            'app_icon_picker': "enabled",
            'camera_roll': "enabled",
            'camera_theme': "enabled",
            'locket_views': "enabled",
            'long_captions': "enabled",
            'longer_video': "enabled",
            'unlimited_friends': "enabled",
            'priority_support': "enabled",
            'profile_badge': "enabled",
            'remove_ads': "enabled",
            'video': "enabled",
            'custom_widget_frames': "enabled",
            'camera_filter_sheet': "enabled",
            'streak_recovery': "enabled",
            'streak_reminders': "enabled"
        }),
        'upsell_features': JSON.stringify({
            'app_icon_picker': true,
            'camera_roll': true,
            'camera_theme': true,
            'locket_views': true,
            'remove_ads': true,
            'custom_widget_frames': true
        }),
        'paywall_presentation_config': JSON.stringify({
            'uid': "paywall_testflight",
            'onboarding': false,
            'after_sent_moment': false,
            'on_foreground': false,
            'interval': 2590976,
            'profile_banner': true
        }),
        'feature_discovery_popup_config': JSON.stringify({
            'tag': "✦ LOCKET GOLD • ELITE MEMBER ✦",
            'tag_gradient': true,
            'tag_style': "gold_gradient",
            'title': "Kích hoạt Locket Gold thành công",
            'feature_set': [{
                'title': "Your Memories, Unlimited",
                'body': "Mở khóa trải nghiệm Locket Gold độc quyền. Lưu giữ những khoảnh khắc đáng nhớ theo phong cách riêng.",
                'imageURL': ""
            }],
            'primary_button_title': "Vào Locket",
            'campaign': "locket_gold_welcome_v3",
            'start_at': "2026-06-16T00:00:00Z",
            'end_at': "9999-06-16T00:00:00Z",
            'use_local_time_zone': true
            }),
            'android_subscribe_gold_button_enabled': "false",
            'profile_badge_visible': "true",
            'lunar_new_year_app_icon_enabled': "true",
            'settings_instagram_url': "",
            'settings_tiktok_url': "",
            'star_sign_caption_image_url': "https://storage.googleapis.com/locket-public/overlays/star_signs"
        });
}
$done({
  'body': JSON.stringify(obj)
});
